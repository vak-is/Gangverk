import Link from 'next/link';
import Image from 'next/image'
// Styles
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image src="/logo.svg" alt="app logo" width={36} height={36}/>
            </div>
            <span>I'm a header, nice to meet you</span>
        </header>
    )
}

export default Header
