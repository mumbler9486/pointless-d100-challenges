<script lang="ts">
	import { ClipboardCopy } from 'svelte-heros';
	import classNames from 'classnames';

	export let copyData: string = '';

	const tooltipOnTime = 1500;
	let clicked = false;

	$: tooltipOpenClass = clicked ? 'tooltip-open' : '';
	$: tooltipClass = classNames('tooltip', tooltipOpenClass);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(copyData);

		if (clicked) return;

		clicked = true;
	};

	const mouseLeave = () => {
		setTimeout(() => {
			clicked = false;
		}, tooltipOnTime);
	};
</script>

{#if clicked}
	<div class={tooltipClass} data-tip="Copied!">
		<div class="btn cursor-pointer" on:click={copyToClipboard} on:mouseleave={mouseLeave}>
			<ClipboardCopy />
		</div>
	</div>
{:else}
	<div class="btn cursor-pointer" on:click={copyToClipboard} on:mouseleave={mouseLeave}>
		<ClipboardCopy />
	</div>
{/if}
