<script>
	export let github, linkedin, twitter, email;
</script>

<section class="social text-center text-black w-full">
	{#if github}
		<a class="inline-flex mx-2" target="_blank" href={github}
			><img class="h-6 w-6 hover:opacity-70" src="assets/icons/github.svg" alt="github" /></a
		>
	{/if}
	{#if linkedin}
		<a class="inline-flex mx-2" href={linkedin} target="_blank"
			><img class="h-6 w-6 hover:opacity-70" src="assets/icons/linkedin.svg" alt="linkedin" /></a
		>
	{/if}
	{#if twitter}
		<a class="inline-flex mx-2" href={twitter} target="_blank"
			><img class="h-6 w-6 hover:opacity-70" src="assets/icons/twitter.svg" alt="twitter" /></a
		>
	{/if}
	{#if email}
		<a class="inline-flex mx-2" href={email} target="_blank"
			><img class="h-6 w-6 hover:opacity-70" src="assets/icons/email.svg" alt="email" /></a
		>
	{/if}
</section>
