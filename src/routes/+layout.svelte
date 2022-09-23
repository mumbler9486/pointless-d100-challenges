<script lang="ts">
	import 'src/app.css';
	import Footer from 'src/components/Footer.svelte';
	import Header from 'src/components/Header.svelte';
</script>

<main class="container flex flex-col">
	<Header />
	<div>
		<slot />
	</div>
	<Footer />
</main>
