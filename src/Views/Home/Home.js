import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';

import Header from '../../Components/Header/Header';

import styles from './Home-styles'

export default function Home() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://hpb.health.gov.lk/api/get-current-statistical')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    //console.log(data.data.update_date_time)

    return (
        <View style={styles.container}>

            <Header />

            <View style={styles.heading}>

                <Text style={styles.headingMainText}>COVID-19 Situation Report</Text>
                <Text style={styles.headingMainText}>Last Update</Text>
                {!loading &&
                    <Text style={styles.headingTimeText}>{data.data.update_date_time}</Text>
                }

            </View>



        </View>
    );
}