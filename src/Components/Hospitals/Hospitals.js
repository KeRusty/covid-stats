import React from 'react';
import { View, Text, Image } from 'react-native';

import TotalImage from '../../../assets/total.png';

import styles from './Hospitals-styles'

export default function Hospitals(props) {

    const hospitals = props.content

    console.log(hospitals)

    return (
        <View style={styles.container}>

            <View style={styles.box}>
                <Text style={styles.headingText}>{hospitals.hospital.name}</Text>
                <Text style={styles.subHeadingTextSimple}>Locals Admitted: {hospitals.cumulative_local}</Text>
                <Text style={styles.subHeadingTextSimple}>Foreigners Admitted: {hospitals.cumulative_foreign}</Text>
                <Text style={styles.subHeadingText}>Total Admissions: {hospitals.cumulative_total}</Text>
                <Text style={styles.subHeadingTextSimple}>Locals in Treatment: {hospitals.treatment_local}</Text>
                <Text style={styles.subHeadingTextSimple}>Foreigners in Treatment: {hospitals.treatment_foreign}</Text>
                <Text style={styles.subHeadingText}>Total in Treatment: {hospitals.treatment_total}</Text>
            </View>

        </View >
    );
}