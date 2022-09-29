<script lang="ts">
	import 'src/app.css';
	import Footer from 'src/components/Footer.svelte';
	import GithubCorner from 'src/components/GithubCorner.svelte';
</script>

<main>
	<GithubCorner />
	<div>
		<slot />
	</div>
	<Footer />
</main>
