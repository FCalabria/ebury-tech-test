import { readable } from 'svelte/store';
import urls from '../business/urls';
import { availableCurrencies } from '../business/currencies';

function ratesFactory (valueGenerator) {
  return Object.keys(availableCurrencies)
  .reduce((rates, currency)=> {
    const key = availableCurrencies[currency]
    rates[currency] = valueGenerator(key)
    return rates
  }, {})
}

const REFRESH_INTERVAL = 1000 * 60 // one minute

const ratesResult = readable({
  values: {},
  error: false,
  loading: true
}, (set) => {
  loadRates(set)
  const interval = setInterval(() => {
    console.log('here')
    loadRates(set)
	}, REFRESH_INTERVAL);

	return function stop() {
		clearInterval(interval);
	};
})

async function loadRates (set) {
  try {
    const result = await fetch(urls.GET_RATES)
      .then(response => response.json())
    if (!result.success) {
      throw new Error('Network response was not OK');
    }
    set({
      values: ratesFactory((key) => result.rates[key]),
      error: false,
      loading: false
    })
  } catch (error) {
    set({
      values: {},
      error: true,
      loading: false
    })
  }
}

export { ratesResult }