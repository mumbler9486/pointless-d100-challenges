<script lang="ts">
	import 'src/app.css';
	import Footer from 'src/components/Footer.svelte';
	import Header from 'src/components/Header.svelte';
</script>

<main>
	<Header />
	<div>
		<slot />
	</div>
	<Footer />
</main>
