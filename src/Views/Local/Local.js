import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import fetch from 'node-fetch';

import Content from '../../Components/ViewBox/ViewBox';
import Tests from '../../Components/PCRTestBox/PCRTestBox';

import styles from './Local-styles'

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

    return (
        <View style={styles.container}>

            {!loading &&
                <ScrollView contentContainerStyle={styles.scrollview}>

                    <View style={styles.heading}>

                        <Text style={styles.headingMainText}>COVID-19 Situation Report</Text>
                        <Text style={styles.headingSubText}>Last Update</Text>
                        <Text style={styles.headingTimeText}>{data.data.update_date_time}</Text>

                    </View>

                    <Content
                        firstBoxTitle={"Total Cases"}
                        firstBoxImage={"total"}
                        firstBoxContent={data.data.local_total_cases}
                        secondBoxTitle={"Active Cases"}
                        secondBoxImage={"active"}
                        secondBoxContent={data.data.local_active_cases}
                    />

                    <Content
                        firstBoxTitle={"New Cases"}
                        firstBoxImage={"new"}
                        firstBoxContent={data.data.local_new_cases}
                        secondBoxTitle={"Quarantined"}
                        secondBoxImage={"quaratine"}
                        secondBoxContent={data.data.local_total_number_of_individuals_in_hospitals}
                    />

                    <Content
                        firstBoxTitle={"Recovered"}
                        firstBoxImage={"recover"}
                        firstBoxContent={data.data.local_recovered}
                        secondBoxTitle={"Deaths"}
                        secondBoxImage={"death"}
                        secondBoxContent={data.data.local_deaths}
                    />

                    <Tests
                        content={data.data.total_pcr_testing_count}
                    />

                </ScrollView>
            }


        </View>
    );
}