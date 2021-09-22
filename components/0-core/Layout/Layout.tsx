import React, { ReactNode } from 'react'
// Components
import Meta from '../Meta';
import Header from '../../3-organisms/Header/Header';

type Props = {
  children?: ReactNode
  title: string
  description: string
}

const Layout = ({ children, title, description }: Props) => (
  <div>
    <Meta title={title} description={description} />
<Header></Header>
    <div className="wrapper">
        {children}
    </div>
  </div>
)

export default Layout
