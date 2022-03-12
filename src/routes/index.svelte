<script>
  import Header from '../components/header.svelte';
  import infos from '../../static/data/info.json';
  import '../app.css';
  import SocialLinks from '../components/social-links.svelte';
  import Readme from '../components/readme.svelte';

  async function getReadmeContent() {
    const res = await fetch(infos.readme_link);
    const readme = await res.text();

    if (res.ok) {
      return readme;
    } else {
      throw new Error(readme);
    }
  }
  const readme$ = getReadmeContent();
</script>

<svelte:head>
	<title>{infos.title}</title>
</svelte:head>
<div class="h-screen flex flex-col justify-center">
  <Header title={infos.name} job={infos.job} />

  {#await readme$ then readme}
    <Readme content={readme} />
  {/await}

  <SocialLinks
    github={infos.github_link}
    linkedin={infos.linkedin_link}
    twitter={infos.twitter_link}
    email={infos.email_link}
  />
</div>
