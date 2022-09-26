<script lang="ts">
	import type { UnitRestriction } from 'src/lib/units';
	import { listEmptyPlaceholder } from 'src/lib/utils/placeholder';

	export let backUnit: UnitRestriction;
	export let armsUnit: UnitRestriction;
	export let legsUnit: UnitRestriction;
</script>

<div class="card bg-base-100 shadow-xl text-sm">
	<div class="card-body">
		<h2 class="card-title">Gear restrictions</h2>
		<strong>Units</strong>
		<ul>
			<li>
				<strong>{backUnit.name}</strong>
				[{backUnit.slots}s]
				{`(SGA: ${backUnit.sGradeAugment})`}
				<ul>
					{#each listEmptyPlaceholder(backUnit.restrictions) as unitRes}
						<li>• {unitRes}</li>
					{/each}
				</ul>
			</li>
			<li>
				<strong>{armsUnit.name}</strong>
				[{armsUnit.slots}s]
				{`(SGA: ${armsUnit.sGradeAugment})`}
				<ul>
					{#each listEmptyPlaceholder(armsUnit.restrictions) as unitRes}
						<li>• {unitRes}</li>
					{/each}
				</ul>
			</li>
			<li>
				<strong>{legsUnit.name}</strong>
				[{legsUnit.slots}s]
				{`(SGA: ${legsUnit.sGradeAugment})`}
				<ul>
					{#each listEmptyPlaceholder(legsUnit.restrictions) as unitRes}
						<li>• {unitRes}</li>
					{/each}
				</ul>
			</li>
		</ul>
	</div>
</div>
