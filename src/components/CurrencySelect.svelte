<script>
  import { availableCurrencies } from '../business/currencies'
  export let value;

  $: currencyValues = Object.keys(availableCurrencies);
</script>
<select bind:value={value}>
  {#each currencyValues as currency}
    <option value={currency}>{currency}</option>
  {/each}
</select>