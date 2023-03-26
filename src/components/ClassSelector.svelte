<script lang="ts">
	import { PlayerClass } from 'src/lib/classes';
	import { scionClasses } from 'src/lib/classes';
	import { mainClass, subClass } from 'src/lib/classStore';

	export let selectSubClass: boolean = false;
	export let selection: PlayerClass | undefined = undefined;

	const defaultValue = `* Any ${selectSubClass ? 'sub' : 'main'} class`;

	// Compute selection
	let classSelection: string;
	$: updateSelection(classSelection);
	const updateSelection = (select: string) => {
		selection = select == defaultValue ? undefined : (<any>PlayerClass)[select];
		if (!selectSubClass) {
			mainClass.set(selection);
		} else {
			subClass.set(selection);
		}
	};

	$: selectableOptions = generateClassPickOptions($mainClass, $subClass);

	const generateClassPickOptions = (...triggers: any) => {
		const options = selectSubClass
			? classOptions.filter((c) => c.label != PlayerClass.Hero)
			: classOptions;

		return options.map((x) => {
			// Is sub selector, disable same main class
			if (selectSubClass && $mainClass == x.label) {
				return { ...x, disabled: true };
			}

			// Is main selector, disable same sub class
			if (!selectSubClass && $subClass == x.label) {
				return { ...x, disabled: true };
			}

			// Is sub selector, main class chosen, main is scion
			if (selectSubClass && $mainClass && scionClasses.includes($mainClass)) {
				return { ...x, disabled: true };
			}

			// Is main selector, sub class chosen, disable scion options
			if (!selectSubClass && $subClass && scionClasses.includes(x.label)) {
				return { ...x, disabled: true };
			}

			return { ...x, disabled: false };
		});
	};

	// Options
	const classOptions = Object.entries(PlayerClass).map(([key, label]) => ({
		key,
		label
	}));
</script>

<select bind:value={classSelection} class="select-bordered select max-w-xs">
	<option selected>{defaultValue}</option>
	{#each selectableOptions as opt}
		<option disabled={opt.disabled} value={opt.key}>{opt.label}</option>
	{/each}
</select>
