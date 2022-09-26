<script lang="ts">
	import type { Challenge } from 'src/lib/challenge';
	import ClassChallengeView from './ClassChallengeView.svelte';
	import ConditionChallengeView from './ConditionChallengeView.svelte';
	import UnitChallengeView from './UnitChallengeView.svelte';
	import WeaponChallengeView from './WeaponChallengeView.svelte';

	export let challenge: Challenge;
</script>

<div class="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-base-200 p-2 rounded">
	<div class="bg-secondary text-secondary-content p-4 rounded text-2xl col-span-3 text-center">
		{challenge.mainClass}{challenge.subClass ? `/${challenge.subClass}` : ''}
	</div>
	<div class="row-start-2">
		<UnitChallengeView
			backUnit={challenge.backUnitRestriction}
			armsUnit={challenge.armsUnitRestriction}
			legsUnit={challenge.legsUnitRestriction}
		/>
	</div>
	<div class="row-start-3 md:row-start-2">
		<ClassChallengeView
			mainClass={challenge.mainClass}
			classRestrictions={challenge.classRestrictions}
		/>
		<div class="mt-2">
			<WeaponChallengeView weaponRestriction={challenge.weaponRestriction} />
		</div>
	</div>
	<div class="row-start-4 md:row-start-3 xl:row-start-2">
		<ConditionChallengeView otherChallenges={challenge.otherChallenges} />
	</div>
	<div
		class="bg-accent row-start-5 text-accent-content rounded p-4 text-xl col-span-3 shadow-lg text-center"
	>
		<div class="line-through">
			While <span class="text-bold">{challenge.bigChallenge}</span>
		</div>
	</div>
</div>
