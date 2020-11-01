import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';

import AppHeader from '../../Components/AppHeader/AppHeader';
import Content from '../../Components/ViewBox/ViewBox';

import styles from './LocationSelect-styles'

export default function LocationSelect() {

    /*const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://hpb.health.gov.lk/api/get-current-statistical')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);*/

    //console.log(data.data.update_date_time)

    return (
        <View style={styles.container}>

            <AppHeader title={"Select Location"} />

            <View>
                <Text>Test</Text>
            </View>

        </View>
    );
}