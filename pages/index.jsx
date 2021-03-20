import Head from 'next/head'
import styles from '../styles/home.module.css'
import infos from '../data/info.json'
import GithubCalendar from '../components/github-calendar/github-calendar'
import Readme from '../components/readme/readme'
import SocialLinks from '../components/social-links/social-links'
import { getGitHubContributions } from '../utils/action.async'

export default function Home({ readme, githubContribution }) {
  return (
    <div>
      <Head>
        <title>{infos.title}</title>
        <meta property="description" content={infos.description} key="description" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="favicons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
        <link rel="manifest" href="favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="favicons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={styles.container}>
          <div className={styles.containerInfos}>
            <h1 className={styles.containerTitle}>{infos.name}</h1>
            <h2 className={styles.containerDescription}>{infos.job}</h2>
            {readme && <Readme content={readme} />}
            {githubContribution && <GithubCalendar githubContribution={githubContribution} />}
            <SocialLinks 
              github={infos.github_link}
              linkedin={infos.linkedin_link} 
              twitter={infos.twitter_link}
              email={infos.email_link}
            />
          </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(infos.readme_link)
  const readme = await res.text()
  const githubContribution = await getGitHubContributions(process.env.READ_USER_TOKEN, 'metzgegu')

  return {
    props: { readme, githubContribution },
  }
}