import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import {withSelfMeasure} from './utils/selfMeasureBehavior';
import {compose} from 'recompose';
import buildTransform from './utils/buildTransform';


const AnimatedImage = ({
    animationRange,
    onLayoutSetMeasurements,
    elementX,
    elementY,
    elementHeight,
    elementWidth,}) => {

        const animateImage = buildTransform(animationRange, elementX, elementY, elementHeight, elementWidth, 20, 40, 0.5);        
        return (
            <Animated.Image 
                source={require('./img/dog.png')} 
                style={[styles.image, animateImage]} 
                onLayout={event => onLayoutSetMeasurements(event)} />                
        )        
}

const styles = StyleSheet.create({
    image: {  
        marginTop: 20,
        width: 50,
        height: 50              
    }
});

const enhance = compose(withSelfMeasure);

export default enhance(AnimatedImage);