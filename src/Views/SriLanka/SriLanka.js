import React from 'react';
import { View } from 'react-native';

import Header from '../../Components/Header/Header';

import styles from './SriLanka-styles'

export default function SriLanka(props) {

    return (
        <View style={styles.container}>

            <Header showBack={true} nav={props} />

        </View>
    );
}