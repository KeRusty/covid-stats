import React from 'react';
import { View, Text, Image } from 'react-native';

import TotalImage from '../../../assets/total.png';
import ActiveImage from '../../../assets/active.png';
import NewImage from '../../../assets/new.png';
import QuarantineImage from '../../../assets/quarantine.png';
import RecoverImage from '../../../assets/recovered.png';
import DeathImage from '../../../assets/death.png';

import styles from './ViewBox-styles'

export default function ViewBox(props) {

    return (
        <View style={styles.container}>

            <View style={styles.box}>
                <Image style={styles.image} source={props.firstBoxImage === "total" ? TotalImage : props.firstBoxImage === "new" ? NewImage : props.firstBoxImage === "recover" ? RecoverImage : null} />
                <Text style={props.firstBoxImage === "total" ? styles.totalText : props.firstBoxImage === "new" ? styles.newText : props.firstBoxImage === "recover" ? styles.recoveredText : null}>{props.firstBoxTitle}</Text>
                <Text style={props.firstBoxImage === "total" ? styles.totalText : props.firstBoxImage === "new" ? styles.newText : props.firstBoxImage === "recover" ? styles.recoveredText : null}>{props.firstBoxContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </View>

            <View style={styles.box}>
                <Image style={styles.image} source={props.secondBoxImage === "active" ? ActiveImage : props.secondBoxImage === "quaratine" ? QuarantineImage : props.secondBoxImage === "death" ? DeathImage : props.secondBoxImage === "new" ? NewImage : null} />
                <Text style={props.secondBoxImage === "active" ? styles.activeText : props.secondBoxImage === "quaratine" ? styles.quarantineText : props.secondBoxImage === "death" ? styles.deathText : props.secondBoxImage === "new" ? styles.newText : null}>{props.secondBoxTitle}</Text>
                <Text style={props.secondBoxImage === "active" ? styles.activeText : props.secondBoxImage === "quaratine" ? styles.quarantineText : props.secondBoxImage === "death" ? styles.deathText : props.secondBoxImage === "new" ? styles.newText : null}>{props.secondBoxContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </View>

        </View >
    );
}