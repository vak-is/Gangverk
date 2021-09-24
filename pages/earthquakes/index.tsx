import {useEffect, useState} from 'react'
import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import axios from 'axios'
// Components
import Layout from '../../components/0-core/Layout/Layout';
import Table, { EarthquakeDataType } from '../../components/3-organisms/Table/Table';
import Map from '../../components/3-organisms/Map/Map';

const Earthquakes: NextPage = () => {
    const [earthquakes, setEarthquakes] = useState<EarthquakeDataType>()
    const [intervalTimer, setIntervalTimer] = useState<number>(15)

    const getEarthquakes = async () => {
        try {
            const earthquakesData = await axios.get("https://apis.is/earthquake/is")
            setEarthquakes(earthquakesData.data.results);
        } catch (err) {
            // TODO: Handle Error
            console.error(err);
        }
    };

    useEffect(() => {
        getEarthquakes()

        const interval = setInterval(() => {
            getEarthquakes()
        }, intervalTimer * 60000)

        return () => clearInterval(interval);
    }, [intervalTimer])

    return (
        <Layout title="Earthquakes | Gangver Earthquake App" description="The prevelance of earthquake in iceland. Sortable by date, time, etc.">
            <div className="pageHeader">
                <h1>Earthquakes</h1>
                <div className="timer">
                    <span>API Timer (minutes)</span>
                    <input type="number" value={intervalTimer} onInput={e => setIntervalTimer(Number((e.target as HTMLInputElement).value))}/>
                </div>
            </div>
            
            <div className="container row onethird">
                {earthquakes ? (
                    <Table earthquakes={earthquakes!}/>
                ) : (
                    <p>loading...</p>
                )
                }
                <Map/>
            </div>
        </Layout>
    )
}

export default Earthquakes
