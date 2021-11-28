<script>
  require ('./Converter.css');
  import CurrencySelect from '../components/CurrencySelect.svelte';
  import NumberInput from '../components/NumberInput.svelte';

  export let rates = {};
  let entryValue = 0;
  let entryCurrency
  let convertCurrency
  $: convertedValue = (entryCurrency && convertCurrency && rates[entryCurrency] && rates[convertCurrency])
    ? (entryValue * rates[entryCurrency] / rates[convertCurrency]).toFixed(2)
    : 0

</script>
<div class="etc-currency-converter">
  <h2 class="etc-currency-converter__title">Currency Conversor</h2>
  <div class="etc-currency-converter__content">
    <NumberInput step={0.01} bind:value={entryValue}/>
    <CurrencySelect bind:value={entryCurrency}/>
    <!-- TODO: show rate -->
    <span>=</span>
    <span class="etc-currency-converter__result">{ convertedValue }</span>
    <CurrencySelect bind:value={convertCurrency}/>
  </div>
</div>