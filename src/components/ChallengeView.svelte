<script lang="ts">
	import type { Challenge } from 'src/lib/challenge';

	export let challenge: Challenge;
</script>

<div class="grid gap-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 bg-base-200 rounded">
	<div class="bg-secondary text-secondary-content p-4 rounded text-2xl col-span-3 text-center">
		{challenge.mainClass}{challenge.subClass ? `/${challenge.subClass}` : ''}
	</div>
	<div>
		<div class="card card-side bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Gear restrictions</h2>
				<strong>Units</strong>
				<ul>
					<li>Back: {challenge.backUnitRestriction}</li>
					<li>Arms: {challenge.armsUnitRestriction}</li>
					<li>Legs: {challenge.legsUnitRestriction}</li>
				</ul>
				<strong>Other Gear</strong>
				<ul>
					{#each challenge.otherGearRestrictions ?? [] as gearRes}
						<li>{gearRes}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class="card card-side bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">Skill Restrictions</h2>
			<ul>
				{#each challenge.skillRestrictions ?? [] as skillRes}
					<li>{skillRes}</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="card card-side bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">Challenges</h2>
			<ul>
				{#each challenge.challenges ?? [] as chal}
					<li>{chal}</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="bg-accent text-accent-content rounded p-4 text-xl col-span-3 shadow-lg text-center">
		<div>
			While <span class="text-bold">{challenge.bigChallenge}</span>
		</div>
	</div>
</div>
