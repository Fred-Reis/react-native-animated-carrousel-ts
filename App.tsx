import React from 'react';
import {StatusBar} from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {ThemeProvider} from 'styled-components';

import {
    Marvel_400Regular,
    Marvel_700Bold,
    useFonts,
} from '@expo-google-fonts/marvel';

import {
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import theme from './src/global/styles/theme';
import {Home} from './src/pages/Home';

export default function App() {
    const [fontsLoaded] = useFonts({
        Marvel_400Regular,
        Marvel_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <ThemeProvider theme={theme}>
            <StatusBar style="auto" />
            <Home />
        </ThemeProvider>
    );
}
