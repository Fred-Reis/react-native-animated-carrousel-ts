import {Animated, ViewStyle, _View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {CardProps} from '.';

interface DataDTO extends Animated.AnimatedProps<ViewStyle> {
    content: CardProps;
}

export const CardContainer = styled(Animated.View)<DataDTO>`
    width: ${({theme}) => theme.variables.CARD_WIDTH}px;
`;

export const Content = styled.View`
    height: ${({theme}) => theme.variables.CARD_HEIGHT}px;
    margin: ${({theme}) => theme.variables.SPACCING}px;
    align-items: center;

    background-color: ${({theme}) => theme.colors.shape};

    padding: ${({theme}) => theme.variables.SPACCING}px
        ${({theme}) => theme.variables.SPACCING * 2}px;
    border-radius: 35px;
    z-index: 999;
`;

export const Image = styled.Image`
    height: ${({theme}) => theme.variables.CARD_HEIGHT * 0.8}px;
    width: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

// export const InfoContent = styled.View`
//     flex-direction: column;
//     align-items: center;
// `;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.fonts.primary_bold};
    text-align: center;
    margin: auto;
`;

// export const InfoContainer = styled.ScrollView`
//     /* height: 100%; */
//     height: 50px;
// `;

// export const Info = styled.Text`
//     color: ${({theme}) => theme.colors.text};
//     font-size: ${RFValue(16)}px;
//     font-family: ${({theme}) => theme.fonts.secondary_regular};
//     text-align: center;
//     overflow: hidden;
// `;
