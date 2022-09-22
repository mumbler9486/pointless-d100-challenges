<script lang="ts">
	import 'src/app.css';
	import Footer from 'src/components/Footer.svelte';
</script>

<main class="container flex flex-col">
	<div class="mt-10">
		<slot />
	</div>
	<Footer />
</main>
