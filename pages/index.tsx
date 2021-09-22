import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/0-core/Layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="This is a title" description="This is a description">
        <main>
          <h1>
            <Image src="/logo.svg" alt="app logo" width={36} height={36}/>
            Gangverk verkefni
          </h1>
          <a href="/view-book">
            View Book
          </a>
        </main>
        {/* <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span >
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer> */}
    </Layout>
  )
}

export default Home
