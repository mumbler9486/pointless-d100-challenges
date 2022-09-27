<script lang="ts">
	import type { PlayerClass } from 'src/lib/classes';
	import { listEmptyPlaceholder } from 'src/lib/utils/placeholder';

	export let mainClass: PlayerClass;
	export let classRestrictions: string[];
</script>

<div>
	<div class="card bg-base-100 shadow-xl text-sm">
		<div class="card-body">
			<h2 class="card-title">{mainClass} Restrictions</h2>
			<ul>
				{#each listEmptyPlaceholder(classRestrictions, 'None') ?? [] as classRes}
					<li>• {classRes}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
