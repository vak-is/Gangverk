import React, { ReactNode } from 'react'
import styles from './Layout.module.scss';
// Components
import Meta from '../Meta';

type Props = {
  children?: ReactNode
  title: string
  description: string
}

const Layout = ({ children, title, description }: Props) => (
  <div>
    <Meta title={title} description={description} />
    <div className="wrapper">
      <div className={styles.container}>
        {children}
      </div>
    </div>
  </div>
)

export default Layout
