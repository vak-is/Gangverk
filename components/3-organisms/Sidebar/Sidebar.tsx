import Link from 'next/link';
import Image from 'next/image'
// Styles
import styles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <ul>
                <li><a href="/earthquakes">Earthquakes</a></li>
            </ul>
        </aside>
    )
}

export default Sidebar
