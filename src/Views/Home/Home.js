import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, ScrollView, View } from 'react-native';

import Header from '../../Components/Header/Header';

import styles from './Home-styles'

export default function Home(props) {

    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <Text style={styles.headerText}>COVID 19 Tracker</Text>

            </View>

            <ScrollView contentContainerStyle={styles.scroll}>

                <TouchableOpacity style={styles.contentBox} onPress={() => { props.navigation.navigate('srilanka'); }}>

                    <Text style={styles.buttonText}>Sri Lankan Stats</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.contentBox} onPress={() => { props.navigation.navigate('locationSelect', { nav: props.navigation }); }}>

                    <Text style={styles.buttonText}>Country Picker</Text>

                </TouchableOpacity>

            </ScrollView>

        </View>
    );
}