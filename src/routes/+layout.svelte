<script lang="ts">
	import 'src/app.css';
	import Footer from 'src/components/Footer.svelte';
	import GithubCorner from 'src/components/GithubCorner.svelte';
	import RedirectToHttps from 'src/components/RedirectToHttps.svelte';
</script>

<main>
	<RedirectToHttps />
	<GithubCorner href="https://github.com/mumbler9486/pointless-d100-challenges" />
	<div>
		<slot />
	</div>
	<Footer />
</main>
