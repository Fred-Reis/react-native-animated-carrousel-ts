import React from 'react';
import {Animated, ViewProps} from 'react-native';

import {CardContainer, Content, Image, Title} from './styles';

export interface CardProps {
    id: any;
    thumbnail: string;
    title: string;
    info: string;
}

interface DataDTO extends Animated.AnimatedProps<ViewProps> {
    content: CardProps;
}

export const Card = ({content, ...rest}: DataDTO) => {
    return (
        <CardContainer content={content} {...rest}>
            <Content>
                <Image source={{uri: content.thumbnail}} />

                <Title>{content.title}</Title>
            </Content>
        </CardContainer>
    );
};
