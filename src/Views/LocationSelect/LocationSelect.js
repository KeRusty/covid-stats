import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, ScrollView } from 'react-native';
import fetch from 'node-fetch';

import AppHeader from '../../Components/AppHeader/AppHeader';
import CountryPicker from '../../Components/CountryPicker/CountryPicker';
import Content from '../../Components/ViewBox/ViewBox';

import styles from './LocationSelect-styles'

export default function LocationSelect(props) {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    const onChange = useCallback((values) => {

        if (values) {
            let country = values.split(",")

            fetch(`https://corona.lmao.ninja/v2/countries/${country[0]}?yesterday&strict&query%${country[1]}`)
                .then((response) => response.json())
                .then((json) => setData(json))
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));

        }

    }, []);
console.log(!loading ?data:null)
    return (
        <View style={styles.container}>

            <AppHeader title={"Select Location"} showBack={true} nav={props} />

            <View style={styles.pickerContainer}>
                <CountryPicker onChange={onChange} />
            </View>

            {!loading &&
                data &&
                <ScrollView style={styles.scrollview}>

                    <Content
                        firstBoxTitle={"Total Cases"}
                        firstBoxImage={"total"}
                        firstBoxContent={data.cases || "Not Available"}
                        secondBoxTitle={"New Cases"}
                        secondBoxImage={"new"}
                        secondBoxContent={data.todayCases || "Not Available"}
                    />

                    <Content
                        firstBoxTitle={"Recovered"}
                        firstBoxImage={"recover"}
                        firstBoxContent={data.recovered || "Not Available"}
                        secondBoxTitle={"Deaths"}
                        secondBoxImage={"death"}
                        secondBoxContent={data.deaths || "Not Available"}
                    />

                </ScrollView>
            }

        </View>
    );
}