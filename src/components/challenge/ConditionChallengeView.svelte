<script lang="ts">
	import { listEmptyPlaceholder } from 'src/lib/utils/placeholder';

	export let otherChallenges: string[];
</script>

<div class="card bg-base-100 text-sm shadow-xl">
	<div class="card-body">
		<h2 class="card-title">Challenges</h2>
		<ul>
			{#each listEmptyPlaceholder(otherChallenges) as chal}
				<li>• {chal}</li>
			{/each}
		</ul>
	</div>
</div>
