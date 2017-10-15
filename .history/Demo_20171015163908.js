import React from 'react';
import { StyleSheet, Text, View, ScrollView, Animated } from 'react-native';
import {compose, withState, withProps} from 'recompose';
import AnimatedHeader from './AnimatedHeader';
import ItemInScroll from './ItemInScroll';

export const scrollRangeForAnimation = 100;

const HeaderPlaceholder = <View style={{flex: 0, height: 172, width: '100%'}} />;

const Demo = ({scrollY, animationRange}) =>   
      <View style={styles.container}>                        
      {/* <AnimatedHeader animationRange={animationRange}/> */}      
        <Animated.ScrollView            
            style={{flex:1, zIndex: 1}}
            onScroll={Animated.event(
                [
                    {
                        nativeEvent: {contentOffset: {y: scrollY}},
                    },
                ],
                {
                    useNativeDriver: true,
                }
            )}
            >
            {HeaderPlaceholder}
            <ItemInScroll numberOfItem={1} />
            <ItemInScroll numberOfItem={2} />
            <ItemInScroll numberOfItem={3} />
            <ItemInScroll numberOfItem={4} />
            <ItemInScroll numberOfItem={5} />
            <ItemInScroll numberOfItem={6} />
            <ItemInScroll numberOfItem={7} />
            <ItemInScroll numberOfItem={8} />
            <ItemInScroll numberOfItem={9} />
            <ItemInScroll numberOfItem={10} />
            <ItemInScroll numberOfItem={11} />
        </Animated.ScrollView>         
        <View style={{position: 'absolute', flex: 0, zIndex: 10, height:300, width:300, backgroundColor: 'green'}}/>
      </View>    

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

const enhance = compose(
    withState('scrollY', 'setScrollY', () => new Animated.Value(0)),
    withProps(({scrollY}) => ({
        animationRange: scrollY.interpolate({
            inputRange: [0, scrollRangeForAnimation],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        }),
    }))
);

export default enhance(Demo);
