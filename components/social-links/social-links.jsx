import Link from 'next/link'
import styles from './social-links.module.css'

export default function SocialLinks({github, linkedin, twitter, email, strava}) {
    return (
        <div className={styles.social}>
            <Link href={github}>
                <a target="_blank"><img src="assets/icons/github.svg" alt="github"/></a>
            </Link>
            <Link href={linkedin}>
                <a target="_blank"><img src="assets/icons/linkedin.svg" alt="linkedin"/></a>
            </Link>
            <Link href={twitter}>
                <a target="_blank"><img src="assets/icons/twitter.svg" alt="twitter"/></a>
            </Link>
            <Link href={strava}>
                <a target="_blank"><img src="assets/icons/strava.svg" alt="strava"/></a>
            </Link>
            <Link href={email}>
                <a target="_blank"><img src="assets/icons/email.svg" alt="email"/></a>
            </Link>
           <Link href={'/cv'}>
               <a target="_blank"><img src="assets/icons/cv.svg" alt="cv"/></a>
           </Link>
      </div>
    );
}
