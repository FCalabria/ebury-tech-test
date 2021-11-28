<script>
	import { onMount } from 'svelte';
	import { rates, loadRates } from './store/rates'
	import Converter from './widgets/Converter.svelte';

	onMount(loadRates)
</script>

<main>
	<Converter rates={$rates}/>
</main>

<style>
</style>
