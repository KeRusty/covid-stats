import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Header, Body, Title } from 'native-base';

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

    console.log(data.data.update_date_time)

    return (
        <View style={styles.container}>

            <Header style={styles.header}>

                <Body>
                    <Title style={styles.headerText}>Header</Title>
                </Body>

            </Header>

            <Text>COVID-19 Situation Report</Text>

        </View>
    );
}