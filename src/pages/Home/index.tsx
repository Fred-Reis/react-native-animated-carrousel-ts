import React, {useRef} from 'react';
import marvelApi from '../../utils/marvelApi.json';
import {Card} from '../../components/Card';
import {Container} from './styles';
import {Animated, View, FlatList, Image} from 'react-native';
import theme from '../../global/styles/theme';

import Svg, {Rect} from 'react-native-svg';
import {LinearGradient} from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const fakeObject = {
    id: Math.random(),
    thumbnail: {
        path: '',
        extension: '',
    },
    background: {
        path: '',
        extension: '',
    },
    name: '',
    description: '',
};

let fakeObject2 = {...fakeObject};

fakeObject2.id = Math.random() * 2;

let apiData: any[] = [];

apiData = [fakeObject, ...marvelApi.data.results, fakeObject2];

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const BackDrop = ({data, scrollX}) => {
    return (
        <View
            style={{
                position: 'absolute',
                width: theme.variables.BACKDROP_WIDTH,
                height: theme.variables.BACKDROP_HEIGHT,
            }}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => {
                    console.log(
                        `${index} ${item.name} ${item.background.path}.${item.background.extension}`,
                    );
                    if (!item.background.path) {
                        return null;
                    }

                    const inputRange = [
                        (index - 2) * theme.variables.CARD_WIDTH,
                        (index - 1) * theme.variables.CARD_WIDTH,
                    ];
                    const translateX = scrollX.interpolate({
                        inputRange,
                        outputRange: [-theme.variables.width, 0],
                    });
                    return (
                        <MaskedView
                            maskElement={
                                <AnimatedSvg
                                    style={{transform: [{translateX}]}}
                                    width={theme.variables.width}
                                    height={theme.variables.height}
                                    viewBox={`0 0 ${theme.variables.width} ${theme.variables.height}`}>
                                    <Rect
                                        x="0"
                                        y="0"
                                        width={theme.variables.width}
                                        height={theme.variables.height}
                                        fill="red"
                                    />
                                </AnimatedSvg>
                            }
                            style={{position: 'absolute'}}>
                            <Image
                                style={{
                                    width: theme.variables.width,
                                    height: theme.variables.BACKDROP_HEIGHT,
                                    resizeMode: 'cover',
                                }}
                                source={{
                                    uri: `${item.background.path}.${item.background.extension}`,
                                }}
                            />
                        </MaskedView>
                    );
                }}
            />
            <LinearGradient
                colors={['transparent', 'white']}
                style={{
                    width: theme.variables.width,
                    height: theme.variables.BACKDROP_HEIGHT,
                    position: 'absolute',
                    bottom: 0,
                }}
            />
        </View>
    );
};

export const Home = () => {
    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <Container>
            <BackDrop data={apiData} scrollX={scrollX} />

            <Animated.FlatList
                data={apiData}
                keyExtractor={item => String(item.id)}
                horizontal
                contentContainerStyle={{
                    alignItems: 'center',
                }}
                snapToInterval={theme.variables.CARD_WIDTH}
                decelerationRate={0}
                bounces={false}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: true},
                )}
                scrollEventThrottle={16}
                renderItem={({item, index}) => {
                    if (!item.name) {
                        return (
                            <View
                                style={{width: theme.variables.EMPTY_ITEM_SIZE}}
                            />
                        );
                    }

                    const inputRange = [
                        (index - 2) * theme.variables.CARD_WIDTH,
                        (index - 1) * theme.variables.CARD_WIDTH,
                        index * theme.variables.CARD_WIDTH,
                    ];

                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange: [120, 70, 120],
                    });

                    const data = {
                        id: item.id,
                        thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                        title: item.name,
                        info: item.description,
                    };

                    return (
                        <Card
                            style={{transform: [{translateY}]}}
                            content={data}
                        />
                    );
                }}
            />
        </Container>
    );
};
