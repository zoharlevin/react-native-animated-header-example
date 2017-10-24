import React from 'react';
import { StyleSheet, Text, View, ScrollView, Animated } from 'react-native';
import {compose, withState, withProps} from 'recompose';
import AnimatedHeader from './AnimatedHeader';
import ItemInScroll from './ItemInScroll';

export const scrollRangeForAnimation = 100;

const HeaderPlaceholder = <View style={{flex: 0, height: 200, width: '100%'}} />;

const Demo = ({scrollY, animationRange}) => {  
    let _scrollView = null;

    const onScrollEndSnapToEdge = event => {
        const y = event.nativeEvent.contentOffset.y;
        if (0 < y && y < scrollRangeForAnimation / 2) {
            if (_scrollView) {
                _scrollView.scrollTo({y: 0});
            }
        } else if (scrollRangeForAnimation / 2 <= y && y < scrollRangeForAnimation) {
            if (_scrollView) {
                _scrollView.scrollTo({y: scrollRangeForAnimation});
            }
        }
    };

      return (
        <View style={styles.container}>                              
            <Animated.ScrollView            
                style={styles.scrollView}
                ref={scrollView => {
                    _scrollView = scrollView ? scrollView._component : null;
                }}
                onScrollEndDrag={onScrollEndSnapToEdge}
                onMomentumScrollEnd={onScrollEndSnapToEdge}
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
            <AnimatedHeader animationRange={animationRange}/>        
        </View>    
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex:1, 
    zIndex: 1
  }
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
