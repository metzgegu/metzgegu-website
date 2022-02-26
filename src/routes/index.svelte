<script>
	import Header from '../components/header.svelte';
	import infos from '../../static/data/info.json';
	import '../app.css';
	import SocialLinks from '../components/social-links.svelte';
</script>

<Header title={infos.name} job={infos.job} />

<SocialLinks
	github={infos.github_link}
	linkedin={infos.linkedin_link}
	twitter={infos.twitter_link}
	email={infos.email_link}
/>
