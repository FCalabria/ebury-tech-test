<script>
export let min = 0;
export let step = 1;
export let value;
function formatValue () {
  if (value.toString().match(/\d*\.\d{3,}/)) {
    value = value.toFixed(2)
  }
}
</script>
<input
  type="number"
  {min}
  {step}
  bind:value
  on:input="{formatValue}"
/>