import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Container, Content, Icon, Picker, Form } from "native-base"

import styles from './CountryPicker-styles'

export default function CountryPicker(props) {

    const { onChange } = props;

    const [selected, setSelected] = useState(" ");

    const onValueChange = (value) => {
        setSelected(value)
        onChange(value)
    }

    return (
        <Container>

            <Content>

                <Form>

                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        placeholder="Select your Country"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        style={{ width: undefined }}
                        selectedValue={selected}
                        onValueChange={onValueChange}
                    >

                        <Picker.Item label="United States of America" value="United States of America,USA" />
                        <Picker.Item label="United Arab Emirates" value="United Arab Emirates,UAE" />
                        <Picker.Item label="Brazil" value="Brazil,BR" />
                        <Picker.Item label="Russia" value="Russia,RU" />
                        <Picker.Item label="Sri Lanka" value="Sri Lanka,LK" />
                        <Picker.Item label="Philippines" value="Philippines,PH" />
                        <Picker.Item label="Thailand" value="Thailand,TH" />

                    </Picker>

                </Form>

            </Content>

        </Container>
    );
}