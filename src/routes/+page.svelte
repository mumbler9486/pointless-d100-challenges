<script lang="ts">
	import ChallengeView from 'src/components/challenge/ChallengeView.svelte';
	import ClassSelector from 'src/components/ClassSelector.svelte';

	import type { Challenge } from 'src/lib/challenge';
	import type { PlayerClass } from 'src/lib/classes';
	import { generateChallenge } from 'src/lib/generators/challengeGenerator';

	let generatedChallenges: Challenge[] = [];
	$: challenge = generatedChallenges[generatedChallenges.length - 1];
	$: challengeId = generatedChallenges.length;

	let mainClassChoice: PlayerClass | undefined;
	let subClassChoice: PlayerClass | undefined;

	const createChallenge = () => {
		const newChallenge = generateChallenge(mainClassChoice, subClassChoice);

		generatedChallenges.push(newChallenge);
		generatedChallenges = generatedChallenges;

		console.log(`Generated challenge #${generatedChallenges.length}`, newChallenge);
	};
</script>

<svelte:head>
	<title>Pointless D100/HTPD Challenge Generator</title>
</svelte:head>

<div class="hero">
	<div class="hero-content text-center">
		<div class="max-w-lg">
			<h1 class="text-5xl font-bold">Pointless D100/HTPD Challenge Generator</h1>
			<p class="my-4">
				If I had a meseta for everytime someone says they'll attempt D100/HTPD with some made up
				challenge...
			</p>
			<div class="grid gap-2 grid-cols-3">
				<ClassSelector bind:selection={mainClassChoice} />
				<ClassSelector selectSubClass bind:selection={subClassChoice} />
				<button class="btn btn-primary" on:click={createChallenge}>Challenge Me Bitch</button>
			</div>
		</div>
	</div>
</div>

{#if generatedChallenges.length > 0}
	<div class="container flex flex-col bg-base-100 mx-auto max-w-6xl px-4 lg:px-10 xl:px-12">
		<ChallengeView id={challengeId} {challenge} />
	</div>
{/if}
