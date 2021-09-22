import React, { ReactNode } from 'react'
// Components
import Meta from '../Meta';
import Header from '../../3-organisms/Header/Header';
import Sidebar from '../../3-organisms/Sidebar/Sidebar';
// Styles
import styles from './Layout.module.scss';

type Props = {
  children?: ReactNode
  title: string
  description: string
}

const Layout = ({ children, title, description }: Props) => (
  <div className={styles.layourWrapper}>
    <Meta title={title} description={description} />
    <Header/>
    <div className={styles.contentWrapper}>
      <Sidebar/>
      <main className={styles.mainWrapper}>
        {children}
      </main>
    </div>
  </div>
)

export default Layout
