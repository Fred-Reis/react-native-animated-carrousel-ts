import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
const CARD_WIDTH = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

export default {
    colors: {
        primary: '#FF7700',
        primary_dark: '#FE5E33',

        secondary: '#FFAC1C',
        secondary_light: 'rgba(255, 135, 44, .3)',

        success: '#12a454',
        success_light: 'rgba(18, 164, 84, .5)',

        attention: '#e83f5b',
        attention_light: 'rgba(232, 63, 91, .5)',

        shape: '#fff',
        title: '#363f5f',
        text: '#969cb2',
        text_highlight: '#000',
        background: '#f0f2f5',
    },

    fonts: {
        primary_regular: 'Marvel_400Regular',
        primary_bold: 'Marvel_700Bold',

        secondary_regular: 'Roboto_400Regular',
        secondary_medium: 'Roboto_500Medium',
        secondary_bold: 'Roboto_700Bold',
    },

    variables: {
        width,
        height,

        SPACCING: 10,
        CARD_WIDTH,
        CARD_HEIGHT: height * 0.5,

        EMPTY_ITEM_SIZE: (width - CARD_WIDTH) / 2,

        BACKDROP_WIDTH: width,
        BACKDROP_HEIGHT: height * 0.6,
    },
};
