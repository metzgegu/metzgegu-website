  
  <script>
    import Header from '../components/header.svelte';
    import infos from '../data/info.json';
    import '../app.css';
    import SocialLinks from '../components/social-links.svelte';
    import Readme from '../components/readme.svelte';
  
    export let data;
  </script>
  
  <svelte:head>
    <title>{infos.title}</title>
  </svelte:head>
  <div class="h-screen flex flex-col justify-center">
    <Header title={infos.name} job={infos.job} />
  
    <Readme content={data.props.readme} />
  
    <SocialLinks
      github={infos.github_link}
      linkedin={infos.linkedin_link}
      twitter={infos.twitter_link}
      email={infos.email_link}
    />
  </div>
  