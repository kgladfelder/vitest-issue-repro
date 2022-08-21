<script lang="ts">
	import type { game } from '$lib/types';

	export let searchResults: game[];
	export let searched: boolean = false;
</script>

<div>
	{#each searchResults as result (result.gameName)}
		<div data-testid={`game-card-${result.gameName}`}>
			<div>
				<span>{result.gameName}</span>
			</div>
		</div>
	{:else}
		{#if !searched}
			<h6>Please search for a game.</h6>
		{:else}
			<h6>No results found. Please search for another game.</h6>
		{/if}
	{/each}
</div>
