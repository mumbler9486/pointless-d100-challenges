<script lang="ts">
	import { PlayerClass } from 'src/lib/classes';
	export let subClass: boolean = false;
	export let selection: PlayerClass | undefined = undefined;

	const defaultValue = `* Any ${subClass ? 'sub' : 'main'} class`;

	// Compute selection
	let classSelection: string;
	$: updateSelection(classSelection);
	const updateSelection = (select: string) => {
		selection = select == defaultValue ? undefined : (<any>PlayerClass)[select];
	};

	// Options
	const classOptions = Object.entries(PlayerClass).map(([key, label]) => ({
		key,
		label
	}));
</script>

<select bind:value={classSelection} class="select select-bordered max-w-xs">
	<option selected>{defaultValue}</option>
	{#each classOptions as opt}
		<option value={opt.key}>{opt.label}</option>
	{/each}
</select>
