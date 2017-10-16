import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import AnimatedText from './AnimatedText';
import AnimatedImage from './AnimatedImage';

const HeaderBackground = ({animationRange}) => {
    const animateHeader = {
        transform: [
            {
                translateY: animationRange.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -100],
                }),
            },
        ],
    };

    return <Animated.View style={[styles.headerBackground, animateHeader]} />;
};


const AnimatedHeader = ({animationRange}) => 
    <View style={styles.container} pointerEvents="none"> 
        <HeaderBackground animationRange={animationRange} />
        <Animated.View style={styles.container} pointerEvents="none">       
            <AnimatedText animationRange={animationRange}/>
            <AnimatedImage animationRange={animationRange}/>
        </Animated.View>       
    </View>

const styles = StyleSheet.create({
    container: {
        position: 'absolute', 
        flex: 0, 
        zIndex: 2, 
        height:200, 
        width:'100%', 
        backgroundColor: 'transparent',

        justifyContent: 'center',
        alignItems: 'center'
     },
    headerBackground: {
        position: 'absolute',
        flex: 0,        
        height: 200,
        width: '100%',
        backgroundColor: 'white',
        zIndex: 2,
    }
});

export default AnimatedHeader;