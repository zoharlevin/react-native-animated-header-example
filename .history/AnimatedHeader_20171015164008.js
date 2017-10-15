import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

const HeaderBackground = ({animationRange}) => {
    const animateHeader = {
        transform: [
            {
                translateY: animationRange.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -101],
                }),
            },
        ],
    };

    return <Animated.View style={[styles.headerBackground, animateHeader]} />;
};


const AnimatedHeader = ({animationRange}) => 
    <View> 
        <HeaderBackground animationRange={animationRange} />       
    </View>

const styles = StyleSheet.create({
    // container: {
    //     position: 'absolute',
    //     top:0, 
    //     left: 0,
    //     height: 172,
    //     width: '100%',
    //     backgroundColor: 'white',
    //     zIndex: 2
    // },
    headerBackground: {
        position: 'absolute',
        flex: 0,
        // top:50, 
        // left: 0,
        height: 100,
        width: '100%',
        backgroundColor: 'red',
        zIndex: 2,
    }
});

export default AnimatedHeader;