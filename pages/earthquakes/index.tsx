import type { NextPage, GetServerSideProps, GetServerSidePropsResult, InferGetServerSidePropsType } from 'next'
import Layout from '../../components/0-core/Layout/Layout';

const Earthquakes: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(data);
    return (
        <Layout title="App | Earthquakes in Iceland" description="The prevelance of earthquake in iceland. Sortable by date, time, etc.">
            <h1>Earthquakes page</h1>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`https://apis.is/earthquake/is`);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { data }
    }
}

export default Earthquakes
