import React from 'react';
import { Header, Body, Title } from 'native-base';

import styles from './Header-styles'

export default function AppHeader() {

    return (
        <Header style={styles.header}>

            <Body>
                <Title style={styles.headerText}>Statistics</Title>
            </Body>

        </Header>
    );
}