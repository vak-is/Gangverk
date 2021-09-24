import Link from 'next/link';
import { useRouter } from 'next/router';
// Styles
import styles from './NavigationLink.module.scss';
// Components
import EarthquakeIcon from '../../1-atoms/SVG/earthquake';

type NavigationItem = {
    linkName: string,
    href: string,
    icon: string,
}

const NavigationLink = (navItem: NavigationItem) => {

    const router = useRouter();

    return (
        <li className={styles.navigationLink}>
            <Link href={navItem.href}> 
                <a className={router.pathname === navItem.href ? styles.active : ""}>
                    {/* TODO: Write a dynamic SVG component for Feather Icons, connect to 'icon' key */}
                    <EarthquakeIcon height="20" width="20" />
                    <span>{navItem.linkName}</span>
                </a>
            </Link>
        </li>
    )
}

export type { NavigationItem }
export default NavigationLink
