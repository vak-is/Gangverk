
import styles from './Table.module.scss';

// TODO: Find better name
type EarthquakeType = {
    depth: number,
    humanReadableLocation: string,
    latitude: number,
    longitude: number,
    quality: number
    size: number,
    timestamp: string
}

// TODO: Find better name
type EarthquakeDataType = Array<EarthquakeType>

type TableProps = {
    earthquakes: EarthquakeDataType
}

const Table = (props: TableProps) => {
    console.log(props.earthquakes)
    return (
        <>
            {props.earthquakes && 
                <table className={styles.table}>
                    <tbody>
                        {props.earthquakes.map((earthquake, index) => (
                            <tr>
                                <td>
                                    <div className={styles.magnitude}>
                                        <span>
                                            {earthquake.size}
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.description}>
                                        <header>{earthquake.humanReadableLocation}</header>
                                        <span className={styles.timestamp}>{earthquake.timestamp}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {/* <tfoot>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                    </tfoot> */}
                </table>
            }
        </>
    )
}



export type { EarthquakeDataType }
export default Table
