
import React from 'react';
import styles from './Table.module.scss';
// Components 
import ChevronIcon from '../../1-atoms/SVG/chevron';
import Earthquakes from '../../../pages/earthquakes';

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
    earthquakes: EarthquakeDataType,
}

type sortOptionsType = {
    key: keyof EarthquakeType,
    direction: string
}

const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
}

const sortItems = (earthquakes: EarthquakeDataType, options: null | sortOptionsType = null) => {
    const [sortOptions, setSortingOptions] = React.useState(options);

    const sortedEarthquakes = React.useMemo(() => {
        let sortableItems = [...earthquakes];
        
        if (sortOptions !== null) {
            sortableItems.sort((a , b) => {
                if (a[sortOptions.key] < b[sortOptions.key]) {
                    return sortOptions.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortOptions.key] > b[sortOptions.key]) {
                    return sortOptions.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [earthquakes, sortOptions])

    const requestSort = (key: keyof EarthquakeType) => {
        let direction = 'ascending';
        if(
            sortOptions && 
            sortOptions.key === key &&
            sortOptions.direction === 'ascending'
        ) {
            direction = 'descending'
        }
        setSortingOptions({key, direction})
    };

    return {earthquakes: sortedEarthquakes, requestSort, sortOptions };

}

const Table = (props: TableProps) => {
    const {earthquakes, requestSort, sortOptions } = sortItems(props.earthquakes)
    const getClassFor = (name: string) => {
        if (!sortOptions) {
            return;
        }
        
        return sortOptions.key === name ? sortOptions.direction : 'default'
    }

    return (
        <>
            {earthquakes && 
                <table className={styles.table}>
                    <thead> 
                        <tr>
                            <th>
                                <div className={`${styles.magnitudeHeader} ${getClassFor('size')}`} onClick={() => requestSort('size')}>
                                    <span>
                                        Size
                                    </span>  
                                    <ChevronIcon height="16px" width="16px"/>
                                </div>
                            </th>
                            <th>
                                <div className={`${styles.descriptionHeader} ${getClassFor('timestamp')}`} onClick={() => requestSort('timestamp')}>
                                    <span>
                                        Date
                                    </span>  
                                    <ChevronIcon height="16px" width="16px"/>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {earthquakes.map((earthquake, index) => (
                            <tr key={earthquake.timestamp}>
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
                                        <span className={styles.timestamp}>{formatDate(earthquake.timestamp)}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </>
    )
}



export type { EarthquakeDataType }
export default Table
