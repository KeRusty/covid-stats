import React from 'react';
import { Container, Header, Body, Title, Left, Button, Icon, Right } from 'native-base';
import { Text } from 'react-native';

import styles from './AppHeader-styles'

export default function AppHeader(props) {

    return (
        <Container>

            <Header style={styles.header}>

                <Left>

                    {props.showBack &&
                        <Button transparent onPress={() => { props.nav.navigation.goBack(); }}>

                            <Icon name='arrow-back' style={styles.icon} />

                        </Button>
                    }

                </Left>

                <Body style={styles.headerBody}>

                    <Text style={styles.headerText}>{props.title}</Text>

                </Body>

                <Right>

                    {props.showMenu &&
                        <Button transparent>

                            <Icon name='menu' style={styles.icon} />

                        </Button>
                    }

                </Right>

            </Header>

        </Container>

    );
}