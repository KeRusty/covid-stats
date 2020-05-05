import React from 'react';
import { Container, Header, Body, Title, Tabs, Tab, View } from 'native-base';

import Local from '../../Views/Local/Local';
import Global from '../../Views/Global/Global';
import Hospital from '../../Views/Hospital/Hospital';

import styles from './Header-styles'

export default function AppHeader() {

    return (
        <Container>
            <Header style={styles.header} hasTabs>

                <Body>
                    <Title style={styles.headerText}>COVID-19 Statistics Sri Lanka</Title>
                </Body>

            </Header>

            <Tabs tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>

                <Tab heading="Local" tabStyle={styles.tabStyle} textStyle={styles.textStyle} activeTabStyle={styles.activeTabStyle} activeTextStyle={styles.activeTextStyle}>
                    <Local />
                </Tab >

                <Tab heading="Global" tabStyle={styles.tabStyle} textStyle={styles.textStyle} activeTabStyle={styles.activeTabStyle} activeTextStyle={styles.activeTextStyle}>
                    <Global />
                </Tab>

                <Tab heading="Hospital Info" tabStyle={styles.tabStyle} textStyle={styles.textStyle} activeTabStyle={styles.activeTabStyle} activeTextStyle={styles.activeTextStyle}>
                    <Hospital />
                </Tab>

            </Tabs>

        </Container>

    );
}