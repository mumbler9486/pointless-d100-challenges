<script lang="ts">
	import 'src/app.css';
	import Footer from 'src/components/Footer.svelte';
	import GithubCorner from 'src/components/GithubCorner.svelte';
</script>

<main>
	<GithubCorner href="https://github.com/mumbler9486/pointless-d100-challenges" />
	<div>
		<slot />
	</div>
	<Footer />
</main>
