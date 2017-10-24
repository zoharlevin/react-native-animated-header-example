import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const calcColor = (numberOfItem) => {
    if (numberOfItem%2 === 0) {
        return '#b1b1c1';
    }
    else {
        return '#d1d1d8';
    }
}

const getColorStyle =(numberOfItem) => {
    return {
        backgroundColor: calcColor(numberOfItem)
    }
}

const ItemInScroll = ({numberOfItem}) =>
    <View style={[getColorStyle(numberOfItem), styles.container]}>
        <Text style={styles.item}>{'Item #' + numberOfItem}</Text>
    </View>

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        fontSize: 30        
    }
});

export default ItemInScroll;