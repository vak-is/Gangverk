// Styles
import styles from './Sidebar.module.scss';
// Components
import EarthquakeIcon from '../../1-atoms/SVG/earthquake';
import NavigationLink, { NavigationItem } from '../../1-atoms/NavigationLink/NavigationLink';

type navigationType = Array<NavigationItem>

const Sidebar = () => {

    const sideBarNavigation: navigationType = [
        { linkName: 'Home', href: '/', icon: 'HomeIcon'},
        { linkName: 'Earthquakes', href: '/earthquakes', icon: 'EarthquakeIcon'},
    ]

    return (
        <aside className={styles.sidebar}>
            <ul>
                {sideBarNavigation.map((navItem, index) => (
                    <NavigationLink {...navItem}/>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar
