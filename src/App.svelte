<script>
	import { ratesResult } from './store/rates'
	import Converter from './widgets/Converter.svelte';

</script>

<main>
	<Converter rates={$ratesResult.values} />
</main>

<style>
</style>
