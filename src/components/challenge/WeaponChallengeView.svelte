<script lang="ts">
	import { listEmptyPlaceholder } from 'src/lib/utils/placeholder';
	import type { WeaponRestriction } from 'src/lib/weapons';

	export let weaponRestriction: WeaponRestriction;
</script>

<div class="card bg-base-100 text-sm shadow-xl">
	<div class="card-body">
		<h2 class="card-title">Weapon Restrictions</h2>
		<p>
			<strong>Main Weapon: </strong>
			{weaponRestriction.name} [{weaponRestriction.slots}s]
		</p>
		<ul>
			{#each listEmptyPlaceholder(weaponRestriction.restrictions) as gearRes}
				<li>• {gearRes}</li>
			{/each}
		</ul>
	</div>
</div>
