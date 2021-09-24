import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
// Components
import Layout from '../../components/0-core/Layout/Layout';
import Table, { EarthquakeDataType } from '../../components/3-organisms/Table/Table';
import Map from '../../components/3-organisms/Map/Map';

const Earthquakes: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
    <Layout title="App | Earthquakes in Iceland" description="The prevelance of earthquake in iceland. Sortable by date, time, etc.">
        <h1>Earthquakes page</h1>
        <div className="container row">
            <Table earthquakes={data.results}/>
            <Map/>
        </div>
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
