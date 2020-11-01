import React from 'react';
import { Container, Header, Body, Title, Left, Button, Icon, Right } from 'native-base';
import { Text } from 'react-native';

import styles from './AppHeader-styles'

export default function AppHeader(props) {

    const { title, showBack, showMenu } = props;

    return (
        <Container>

            <Header style={styles.header}>

                <Left>

                    {showBack &&
                        <Button transparent>

                            <Icon name='arrow-back' style={styles.icon} />

                        </Button>
                    }

                </Left>

                <Body style={styles.headerBody}>

                    <Text style={styles.headerText}>{title}</Text>

                </Body>

                <Right>

                    {showMenu &&
                        <Button transparent>

                            <Icon name='menu' style={styles.icon} />

                        </Button>
                    }

                </Right>

            </Header>

        </Container>

    );
}