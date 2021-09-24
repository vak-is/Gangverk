import Link from 'next/link';
import { useRouter } from 'next/router';
// Styles
import styles from './NavigationLink.module.scss';
// Components
import EarthquakeIcon from '../../1-atoms/SVG/earthquake';
import HomeIcon from '../../1-atoms/SVG/home';

type NavigationItem = {
    linkName: string,
    href: string,
    icon: string,
}

// TODO: Add to seperate file or make more dynamic
const navIcon = (iconName: string) => {
    switch (iconName) {
        case 'HomeIcon':
            return <HomeIcon/>;
        case 'EarthquakeIcon':
            return <EarthquakeIcon/>;
        default:
            break;
    }
}

const NavigationLink = (navItem: NavigationItem) => {

    const router = useRouter();

    return (
        <li className={styles.navigationLink}>
            <Link href={navItem.href}> 
                <a className={router.pathname === navItem.href ? styles.active : ""}>
                    {navIcon(navItem.icon)}
                    <span>{navItem.linkName}</span>
                </a>
            </Link>
        </li>
    )
}

export type { NavigationItem }
export default NavigationLink
