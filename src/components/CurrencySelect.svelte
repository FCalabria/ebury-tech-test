<script>
  import { availableCurrencies } from '../business/currencies'
  export let value;
  export let extendedNames = false;

  $: currencyValues = Object.keys(availableCurrencies);
</script>
<select bind:value={value} class="etc-currency-select">
  {#each currencyValues as currency}
    <option value={currency}>
      {currency}{#if extendedNames}&nbsp;- {availableCurrencies[currency].name}{/if}
    </option>
  {/each}
</select>