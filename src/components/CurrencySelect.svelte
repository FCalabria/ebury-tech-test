<script>
  import { availableCurrencies } from '../business/currencies'
  export let label;
  export let value = '';
  export let extendedNames = false;

  $: currencyValues = Object.keys(availableCurrencies);
</script>
<select bind:value={value} class="etc-currency-select" aria-label={label}>
  <option value="">Select one</option>
  {#each currencyValues as currency}
    <option value={currency}>
      {currency}{#if extendedNames}&nbsp;- {availableCurrencies[currency].name}{/if}
    </option>
  {/each}
</select>