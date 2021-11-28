<script>
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
<div class="converter">
  <NumberInput step={0.01} bind:value={entryValue}/>
  <CurrencySelect bind:value={entryCurrency}/>
  <CurrencySelect bind:value={convertCurrency}/>
  { convertedValue }
</div>