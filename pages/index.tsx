import type { NextPage } from 'next'
import Layout from '../components/0-core/Layout/Layout'

const Home: NextPage = () => {
    return (
        <Layout title="Home | Gangverk Earthquake Project" description="Welcome to the beginning of a great app">
            <h1>
                Gangverk Project
            </h1>

            <div className="container even fourtimesfour">
                <section className="box analytics placeholder">Analytics placeholder</section>
                <section className="box analytics placeholder">Analytics placeholder</section>
                <section className="box analytics placeholder">Analytics placeholder</section>
                <section className="box analytics placeholder">Analytics placeholder</section>
            </div>
        </Layout>
    )
}

export default Home
