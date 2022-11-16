<script lang="ts">
	import { beforeUpdate } from 'svelte';

	const isProd = import.meta.env.PROD;
	let isHttps = false;

	beforeUpdate(() => {
		isHttps = window.location.protocol === 'https:';
		if (isProd && !isHttps) {
			console.log('HTTP detected, switching to HTTPS.');
			window.location.protocol = 'https:';
		}
	});
</script>

{#if isProd && !isHttps}
	<div class="fixed p-4 z-50 rounded-br-md bg-primary">
		<p class="text-3xl text-primary-content">Transferring to the HTTPS version of the website...</p>
	</div>
{/if}
