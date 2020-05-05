import React from 'react';
import { Container, Header, Body, Title, Tabs, Tab, View } from 'native-base';

import Local from '../../Views/Local/Local';
import Global from '../../Views/Global/Global';

import styles from './Header-styles'

export default function AppHeader() {

    return (
        <Container>
            <Header style={styles.header} hasTabs>

                <Body>
                    <Title style={styles.headerText}>Statistics</Title>
                </Body>

            </Header>

            <Tabs>
                <Tab heading="Local">
                    <Local />
                </Tab>
                <Tab heading="Global">
                    <Global />
                </Tab>
                <Tab heading="PCR Tests">
                    <Local />
                </Tab>
            </Tabs>
        </Container>

    );
}