<script>
	export let title, job, githubLink;
</script>

<div class="border-2 border-black flex gap-1 p-4 flex-row justify-between">
	<div>
		<h1 class="text-xl font-bold">{title}</h1>
		<p class="text-m mt-2">{job}</p>
	</div>
	<div class="flex flex-row items-center">
		<a class="inline-flex" target="_blank" href={githubLink}>
			<img class="h-6 w-6 hover:opacity-70" src="assets/icons/github.svg" alt="github" />
		</a>
	</div>
</div>
