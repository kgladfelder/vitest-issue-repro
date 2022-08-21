<script lang="ts">
	import type { game } from '$lib/types';

	import Todo from './todos/+page.svelte';

	const searchResults: game[] = [
		{
			gameName: "test 1"
		},
		{
			gameName: "test 2"
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Todo searchResults={searchResults}/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
