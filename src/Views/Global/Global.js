import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';

import Content from '../../Components/ViewBox/ViewBox';

import styles from './Global-styles'

export default function Global() {

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
                <ScrollView style={styles.scrollview}>


                    <View style={styles.heading}>

                        <Text style={styles.headingMainText}>COVID-19 Situation Report</Text>
                        <Text style={styles.headingSubText}>Last Update</Text>
                        <Text style={styles.headingTimeText}>{data.data.update_date_time}</Text>

                    </View>


                    <Content
                        firstBoxTitle={"Total Cases"}
                        firstBoxImage={"total"}
                        firstBoxContent={data.data.global_total_cases}
                        secondBoxTitle={"New Cases"}
                        secondBoxImage={"new"}
                        secondBoxContent={data.data.global_new_cases}
                    />

                    <Content
                        firstBoxTitle={"Recovered"}
                        firstBoxImage={"recover"}
                        firstBoxContent={data.data.global_recovered}
                        secondBoxTitle={"Deaths"}
                        secondBoxImage={"death"}
                        secondBoxContent={data.data.global_deaths}
                    />

                </ScrollView>
            }


        </View>
    );
}