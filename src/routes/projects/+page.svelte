<script>
	import Tile from '../../components/projects/tile.svelte';
	import infos from '../../data/info.json';
</script>

<div class="flex flex-col gap-4 min-h-screen p-8">
	<h1 class="text-2xl">Projects</h1>
	<ul class="flex flex-col gap-4">
		{#each infos.projects as project}
			<li>
				<Tile title={project.title} job={project.description} githubLink={project.github_link} />
			</li>
		{/each}
	</ul>
</div>
