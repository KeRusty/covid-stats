import React from 'react';
import { Container, Header, Body, Button, Icon, Tabs, Tab, Left, Right, View } from 'native-base';
import { Text } from 'react-native';

import Local from '../../Views/Local/Local';
import Global from '../../Views/Global/Global';
import Hospital from '../../Views/Hospital/Hospital';

import styles from './Header-styles'

export default function AppHeader(props) {

    return (
        <Container>

            <Header style={styles.header} hasTabs>

                <Left>

                    {props.showBack &&
                        <Button transparent onPress={() => { props.nav.navigation.goBack(); }}>

                            <Icon name='arrow-back' style={styles.icon} />

                        </Button>
                    }

                </Left>

                <Body>
                    <Text style={styles.headerText}>Sri Lanka Stats</Text>
                </Body>

                <Right>

                    {props.showMenu &&
                        <Button transparent>

                            <Icon name='menu' style={styles.icon} />

                        </Button>
                    }

                </Right>

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