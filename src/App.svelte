<script>
	import { ratesResult } from './store/rates'
	import Converter from './widgets/Converter.svelte';

</script>

<main class="etc-main">
	<Converter rates={$ratesResult.values} error={$ratesResult.error}/>
</main>
