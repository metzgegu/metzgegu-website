<script>
	import '../app.css';
	import { page } from '$app/stores';
	import SocialLinks from '../components/social-links.svelte';
	import infos from '../data/info.json';
</script>

<div class="flex lg:flex-row flex-col">
	<menu class="h-screen fixed w-56 flex-col no-print dot-background hidden lg:flex">
		<div class="border-r-2 border-black py-4 px-4">
			<h1 class="text-center text-xl"><span class="bg-white">Guillaume Metzger</span></h1>
			<h2 class="text-center text-l mt-2"><span class="bg-white">Software Engineer</span></h2>
		</div>
		<li
			class="border-b-2 border-t-2 border-r-2 p-1 border-black {$page.url.pathname === '/'
				? 'border-r-white bg-white'
				: ''} border-transition"
		>
			<a class="text-center w-56 block text-xl cursor-pointer" href="/">About me</a>
		</li>
		<li
			class="border-b-2 border-black border-r-2 p-1 {$page.url.pathname === '/projects'
				? 'border-r-white bg-white'
				: ''} border-transition"
		>
			<a class="text-center w-56 block text-xl cursor-pointer" href="/projects">Projects</a>
		</li>
		<li
			class="border-b-2 border-black border-r-2 p-1 {$page.url.pathname === '/cv'
				? 'border-r-white bg-white'
				: ''} border-transition"
		>
			<a class="text-center w-56 block text-xl cursor-pointer" href="/cv">CV</a>
		</li>
		<div class="relative flex-1 border-r-2 border-black justify-end pb-4">
			<SocialLinks
				github={infos.github_link}
				linkedin={infos.linkedin_link}
				twitter={infos.twitter_link}
				email={infos.email_link}
			/>
		</div>
	</menu>
	<section class="pb-16 lg:pb-0 lg:pl-56 flex-1">
		<slot />
	</section>
	<menu class="lg:hidden flex flex-row fixed bottom-0 w-full bg-white border-t-2">
		<li
			class="flex justify-center flex-1 p-1 {$page.url.pathname === '/'
				? 'bg-slate-200'
				: ''} border-transition"
		>
			<a class="text-center block cursor-pointer" href="/">
				<img class="h-12" src="assets/icons/profile.svg" alt="about me" />
			</a>
		</li>
		<li
			class="flex justify-center flex-1 p-1 {$page.url.pathname === '/projects'
				? 'bg-slate-200'
				: ''} border-transition"
		>
			<a class="text-center block cursor-pointer" href="/projects">
				<img class="h-12" src="assets/icons/tasks.svg" alt="projects" />
			</a>
		</li>
		<li
			class="flex justify-center flex-1 p-1 {$page.url.pathname === '/cv'
				? 'bg-slate-200'
				: ''} border-transition"
		>
			<a class="text-center block cursor-pointer" href="/cv">
				<img class="h-12" src="assets/icons/doc.svg" alt="cv" />
			</a>
		</li>
	</menu>
</div>

<style>
	.border-transition {
		transition: border-right-color 0.1s linear;
	}
</style>
