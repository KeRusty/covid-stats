import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, ScrollView } from 'react-native';

import AppHeader from '../../Components/AppHeader/AppHeader';
import CountryPicker from '../../Components/CountryPicker/CountryPicker';

import styles from './LocationSelect-styles'

export default function LocationSelect() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://corona.lmao.ninja/v2/countries/Italy?yesterday&strict&query%20')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    console.log(data, "DATA")

    const onChange = useCallback((values) => {
        console.log(values, "LS")

    }, []);

    return (
        <View style={styles.container}>

            <AppHeader title={"Select Location"} />

            <View style={styles.pickerContainer}>
                <CountryPicker onChange={onChange} />
            </View>

        </View>
    );
}