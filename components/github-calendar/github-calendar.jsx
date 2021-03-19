import { useEffect, useRef } from 'react';
import GithubCalendar from 'github-calendar';
import 'github-calendar/dist/github-calendar.css';
import 'github-calendar/dist/github-calendar-responsive.css';
import styles from './github-calendar.module.css';


export default function GithubCalendarComponent({githubId}) {
    const ref = useRef(null);
    useEffect(() => GithubCalendar(ref.current, githubId, { responsive: true, global_stats: false, cache: 60 * 60 * 24 }));

    return (
        <div className={styles.calendar} ref={ref} id="github-container"></div>
    );
}
