<script lang="ts">
	import type { Challenge } from 'src/lib/challenge';

	export let challenge: Challenge;

	const listEmptyPlaceholder = (list: string[]) => {
		return list && list.length > 1 ? list : ['None'];
	};
</script>

<div class="grid gap-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 bg-base-200 rounded">
	<div class="bg-secondary text-secondary-content p-4 rounded text-2xl col-span-3 text-center">
		{challenge.mainClass}{challenge.subClass ? `/${challenge.subClass}` : ''}
	</div>
	<div>
		<div class="card card-side ml-2 bg-base-100 shadow-xl text-sm">
			<div class="card-body">
				<h2 class="card-title">Gear restrictions</h2>
				<strong>Units</strong>
				<ul>
					<li>
						<strong>{challenge.backUnitRestriction.name}</strong>
						[{challenge.backUnitRestriction.slots}s]
						{`(SGA: ${challenge.backUnitRestriction.sGradeAugment})`}
						<ul>
							{#each listEmptyPlaceholder(challenge.backUnitRestriction.restrictions) as unitRes}
								<li>• {unitRes}</li>
							{/each}
						</ul>
					</li>
					<li>
						<strong>{challenge.armsUnitRestriction.name}</strong>
						[{challenge.armsUnitRestriction.slots}s]
						{`(SGA: ${challenge.armsUnitRestriction.sGradeAugment})`}
						<ul>
							{#each listEmptyPlaceholder(challenge.armsUnitRestriction.restrictions) as unitRes}
								<li>• {unitRes}</li>
							{/each}
						</ul>
					</li>
					<li>
						<strong>{challenge.legsUnitRestriction.name}</strong>
						[{challenge.legsUnitRestriction.slots}s]
						{`(SGA: ${challenge.legsUnitRestriction.sGradeAugment})`}
						<ul>
							{#each listEmptyPlaceholder(challenge.legsUnitRestriction.restrictions) as unitRes}
								<li>• {unitRes}</li>
							{/each}
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div>
		<div class="card card-side bg-base-100 shadow-xl text-sm">
			<div class="card-body">
				<h2 class="card-title">{challenge.mainClass} Restrictions</h2>
				<ul>
					{#each listEmptyPlaceholder(challenge.classRestrictions) ?? [] as classRes}
						<li>• {classRes}</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="card card-side bg-base-100 shadow-xl mt-2 text-sm">
			<div class="card-body">
				<h2 class="card-title">Weapon Restrictions</h2>
				{challenge.weaponRestriction.name} [{challenge.weaponRestriction.slots}s]

				<ul>
					{#each listEmptyPlaceholder(challenge.weaponRestriction.restrictions) as gearRes}
						<li>• {gearRes}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class="card card-side mr-2 bg-base-100 shadow-xl text-sm">
		<div class="card-body">
			<h2 class="card-title">Challenges</h2>
			<ul>
				{#each listEmptyPlaceholder(challenge.otherChallenges) ?? [] as chal}
					<li>• {chal}</li>
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
