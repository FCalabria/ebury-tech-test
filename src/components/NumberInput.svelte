<script>
export let min = 0;
export let step = 1;
export let value;
export let label;
function formatValue () {
  if (value && value.toString().match(/\d*\.\d{3,}/)) {
    value = value.toFixed(2)
  }
}
</script>
<input
  class="etc-number-input"
  type="number"
  {min}
  {step}
  aria-label={label}
  bind:value
  on:input="{formatValue}"
/>