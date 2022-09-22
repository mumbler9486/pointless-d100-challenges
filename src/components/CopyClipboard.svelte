<script lang="ts">
	import { ClipboardCopy } from 'svelte-heros';
	import classNames from 'classnames';

	export let copyData: string = '';

	const tooltipOnTime = 2000;
	let clicked = false;

	$: tooltipOpenClass = clicked ? 'tooltip-open' : '';
	$: tooltipClass = classNames('tooltip', tooltipOpenClass);

	const copyToClipboard = () => {
		clicked = true;
		setTimeout(() => {
			clicked = false;
		}, 2000);
		navigator.clipboard.writeText(copyData);
	};
</script>

{#if clicked}
	<div class={tooltipClass} data-tip="Copied!">
		<div class="btn cursor-pointer" on:click={copyToClipboard}>
			<ClipboardCopy />
		</div>
	</div>
{:else}
	<div class="btn cursor-pointer" on:click={copyToClipboard}>
		<ClipboardCopy />
	</div>
{/if}
