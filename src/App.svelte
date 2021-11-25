<script>
	import { rates, loadRates } from './store/rates'
	import { onMount } from 'svelte';

	onMount(loadRates)
	let ratesValue
	const unsubscribe = rates.subscribe(value => {
		ratesValue = value;
	});
	$: printableRates = JSON.stringify(ratesValue)
</script>

<main>
	<p>{printableRates}</p>
</main>

<style>
</style>
