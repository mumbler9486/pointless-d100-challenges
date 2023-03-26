<script lang="ts">
	import type { Challenge } from 'src/lib/challenge';
	import ClassChallengeView from './ClassChallengeView.svelte';
	import ConditionChallengeView from './ConditionChallengeView.svelte';
	import UnitChallengeView from './UnitChallengeView.svelte';
	import WeaponChallengeView from './WeaponChallengeView.svelte';

	export let challenge: Challenge;
	export let id: number;
</script>

<div class="grid grid-cols-1 gap-2 rounded bg-base-200 p-2 md:grid-cols-2 xl:grid-cols-3">
	<div
		class="col-span-1 rounded bg-secondary p-4 text-center text-lg text-secondary-content sm:text-2xl md:col-span-2 xl:col-span-3"
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
		class="col-span-1 row-start-5 rounded bg-accent p-4 text-center text-lg text-accent-content shadow-lg sm:text-xl md:col-span-2 xl:col-span-3"
	>
		<div class="line-through">
			While <span class="text-bold">{challenge.bigChallenge}</span>
		</div>
	</div>
</div>
