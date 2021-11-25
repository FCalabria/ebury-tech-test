import { writable } from 'svelte/store';
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

const rates = writable(ratesFactory(() => 0))
const ratesError = writable(null)

async function loadRates () {
  try {
    const result = await fetch(urls.GET_RATES)
      .then(response => response.json())
    if (!result.success) {
      throw new Error('Network response was not OK');
    }
    rates.set(ratesFactory((key) => result.rates[key]))
  } catch (error) {
    rates.set({})
    ratesError.set(error)
  }
}

export { rates, ratesError, loadRates }