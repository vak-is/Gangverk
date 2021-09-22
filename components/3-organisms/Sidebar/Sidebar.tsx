import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
// Styles
import styles from './Sidebar.module.scss';
// Components
import SvgComponent from '../../1-atoms/SVG/earthquake';

const Sidebar = () => {
    const [isHovering, changeIconColor] = useState(false)

    return (
        <aside className={styles.sidebar}>
            <ul>
                <li 
                    onMouseEnter={() => changeIconColor(true)}
                    onMouseLeave={() => changeIconColor(false)}>
                    <SvgComponent height="24" width="24" stroke={isHovering? '#8BD9BF': '#32292F'}/>
                    {/* <Image src="/icons/Feather/disc.svg" alt="Earthquake Icon" height={24} width={24}/> */}
                    <a href="/earthquakes">Earthquakes</a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar
