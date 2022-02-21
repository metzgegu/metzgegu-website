import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'
import styles from './readme.module.css'

export default function ReadMe ({ content }) {
  const rawMarkup = { __html: sanitizeHtml(marked.parse(content)) }

  return (
    <div className={styles.readme} dangerouslySetInnerHTML={rawMarkup} />
  )
}
