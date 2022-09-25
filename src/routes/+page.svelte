<script lang="ts">
	import ChallengeView from 'src/components/ChallengeView.svelte';
	import CopyClipboard from 'src/components/CopyClipboard.svelte';

	import type { Challenge } from 'src/lib/challenge';
	import { generateChallenge } from 'src/lib/generators/challengeGenerator';

	let generatedChallenges: Challenge[] = [];
	$: challenge = generatedChallenges[generatedChallenges.length - 1];

	const createChallenge = () => {
		const newChallenge = generateChallenge();

		generatedChallenges.push(newChallenge);
		generatedChallenges = generatedChallenges;
	};
</script>

<div class="hero mt-2">
	<div class="hero-content text-center">
		<div class="max-w-lg">
			<h1 class="text-5xl font-bold">Pointless D100/HTPD Challenge Generator</h1>
			<p class="my-4">
				If I had a meseta for everytime someone says they'll attempt D100/HTPD with some made up
				challenge...
			</p>
			<button class="btn btn-primary" on:click={createChallenge}>Challenge Me Bitch</button>
		</div>
	</div>
</div>

{#if generatedChallenges.length > 0}
	<div class="container flex flex-col bg-base-100 mx-auto max-w-6xl px-12">
		<h1>#{generatedChallenges.length}</h1>
		<ChallengeView {challenge} />
	</div>
{/if}
