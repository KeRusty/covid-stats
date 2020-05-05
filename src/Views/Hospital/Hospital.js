import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';

import Tests from '../../Components/PCRTestBox/PCRTestBox';
import Hospitals from '../../Components/Hospitals/Hospitals';

import styles from './Hospital-styles'

export default function Local() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://hpb.health.gov.lk/api/get-current-statistical')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const hospitalData = !loading ? data.data.hospital_data : [];

    return (
        <View style={styles.container}>

            {!loading &&
                <ScrollView contentContainerStyle={styles.scrollview}>

                    <View style={styles.heading}>

                        <Text style={styles.headingMainText}>COVID-19 Situation Report</Text>
                        <Text style={styles.headingSubText}>Last Update</Text>
                        <Text style={styles.headingTimeText}>{data.data.update_date_time}</Text>

                    </View>

                    {hospitalData.map((data, key) => (
                        <Hospitals
                            key={key}
                            content={data}
                        />
                    ))

                    }

                </ScrollView>
            }


        </View>
    );
}