<script>
  require ('./Converter.css');
  import CurrencySelect from '../components/CurrencySelect.svelte';
  import NumberInput from '../components/NumberInput.svelte';

  export let rates = {};
  export let error = false;
  let entryValue = 0;
  let entryCurrency
  let convertCurrency
  $: convertedValue = (entryCurrency && convertCurrency && rates[entryCurrency] && rates[convertCurrency])
    ? (entryValue * rates[convertCurrency] / rates[entryCurrency]).toFixed(2)
    : 0
  $: rate = (entryCurrency !== convertCurrency)
    ? (rates[convertCurrency] / rates[entryCurrency]).toFixed(5)
    : 0

</script>
<div class="etc-currency-converter">
  <h2 class="etc-currency-converter__title">Currency Conversor</h2>
  <div class="etc-currency-converter__content">
    {#if error}
      <div class="etc-currency-converter__error-msg">
        <p>There was an error fetching the currency rates</p>
        {#if error.message}<p>{error.message}</p>{/if}
      </div>
    {:else}
      <NumberInput step={0.01} bind:value={entryValue} label="amount" />
      <CurrencySelect bind:value={entryCurrency} extendedNames label="entry currency"/>
      <span>=</span>
      <span class="etc-currency-converter__result">{ convertedValue }</span>
      <CurrencySelect bind:value={convertCurrency} extendedNames label="output currency"/>
      {#if rate}
        <div class="etc-currency-converter__rate-info" >
          <span>Conversion rate is <span class="etc-currency-converter__rate-value">{rate}</span></span>
        </div>
      {/if}
    {/if}
  </div>
</div>