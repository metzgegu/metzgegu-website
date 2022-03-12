<script context="module">
  async function getReadmeContent() {
    const res = await fetch(infos.readme_link);
    const readme = await res.text();

    if (res.ok) {
      return readme;
    } else {
      throw new Error(readme);
    }
  }

  export async function load({ params }) {
    const readme = await getReadmeContent();

    return {
      status: 200,
      props: {
        readme
      }
    };
  }
</script>

<script>
  import Header from '../components/header.svelte';
  import infos from '../../static/data/info.json';
  import '../app.css';
  import SocialLinks from '../components/social-links.svelte';
  import Readme from '../components/readme.svelte';

  export let readme;
</script>

<svelte:head>
  <title>{infos.title}</title>
</svelte:head>
<div class="h-screen flex flex-col justify-center">
  <Header title={infos.name} job={infos.job} />

  <Readme content={readme} />

  <SocialLinks
    github={infos.github_link}
    linkedin={infos.linkedin_link}
    twitter={infos.twitter_link}
    email={infos.email_link}
  />
</div>
