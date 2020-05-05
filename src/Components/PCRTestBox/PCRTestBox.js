import React from 'react';
import { View, Text } from 'react-native';

import styles from './PCRTestBox-styles'

export default function PCRTestBox(props) {

    return (
        <View style={styles.container}>

            <View style={styles.box}>
                <Text style={styles.headingText}>Total Number of PCR Tests Conducted</Text>
                <Text style={styles.subHeadingText}>{props.content.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </View>

        </View >
    );
}