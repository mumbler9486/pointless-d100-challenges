<script lang="ts">
	import type { Challenge } from 'src/lib/challenge';
	import ClassChallengeView from './ClassChallengeView.svelte';
	import ConditionChallengeView from './ConditionChallengeView.svelte';
	import UnitChallengeView from './UnitChallengeView.svelte';
	import WeaponChallengeView from './WeaponChallengeView.svelte';

	export let challenge: Challenge;
	export let id: number;
</script>

<div class="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-base-200 p-2 rounded">
	<div
		class="bg-secondary text-secondary-content p-4 rounded col-span-1 md:col-span-2 xl:col-span-3 text-center text-lg sm:text-2xl"
	>
		<div class="absolute">#{id}</div>
		<div>{challenge.mainClass}{challenge.subClass ? `/${challenge.subClass}` : ''}</div>
	</div>
	<div class="row-start-2 md:col-span-1">
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
		class="bg-accent row-start-5 text-accent-content rounded p-4 col-span-1 md:col-span-2 xl:col-span-3 shadow-lg text-center text-lg sm:text-xl"
	>
		<div class="line-through">
			While <span class="text-bold">{challenge.bigChallenge}</span>
		</div>
	</div>
</div>
