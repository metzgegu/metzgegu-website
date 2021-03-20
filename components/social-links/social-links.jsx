

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import styles from './social-links.module.css'


export default function SocialLinks({github, linkedin, twitter, email}) {
   

    return (
        <div className={styles.social}>
            <Link href={github}>
                <a target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            </Link>
            <Link href={linkedin}>
                <a target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            </Link>
            <Link href={twitter}>
                <a target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            </Link>
            <Link href={email}>
                <a target="_blank"><FontAwesomeIcon icon={faAt} /></a>
            </Link>
           
      </div>
    );
}
