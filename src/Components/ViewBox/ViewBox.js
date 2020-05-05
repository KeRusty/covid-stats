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

            <View style={styles.firstBox}>
                <Image style={styles.image} source={props.firstBoxImage === "total" ? TotalImage : props.firstBoxImage === "new" ? NewImage : props.firstBoxImage === "recover" ? RecoverImage : null} />
                <Text style={styles.firstTextStyle}>{props.firstBoxTitle}</Text>
                <Text style={styles.firstTextStyle}>{props.firstBoxContent}</Text>
            </View>

            <View style={styles.secondBox}>
                <Image style={styles.image} source={props.secondBoxImage === "active" ? ActiveImage : props.secondBoxImage === "quaratine" ? QuarantineImage : props.secondBoxImage === "death" ? DeathImage : null} />
                <Text style={styles.seconTextStyle}>{props.secondBoxTitle}</Text>
                <Text style={styles.firstTextStyle}>{props.secondBoxContent}</Text>
            </View>

        </View>
    );
}