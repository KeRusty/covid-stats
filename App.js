import React, { useEffect, useState } from 'react';
import { Root, View, Text } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Navigator from "./src/Navigation/Navigator";

export default function App() {

    const [isLoadingComplete, setLoadingComplete] = useState(false);

    if (!isLoadingComplete) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        );
    } else {
        return (
            <Navigator />
        );
    }

    async function loadResourcesAsync() {
        await Promise.all([
            Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            }),
        ]);
    }

    function handleLoadingError(error) {
        console.warn(error);
    }

    function handleFinishLoading(setLoadingComplete) {
        setLoadingComplete(true);
    }
}





