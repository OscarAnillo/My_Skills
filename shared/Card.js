import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card( props ){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        backgroundColor: '#eee',
        elevation: 3,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        margin: 8

    },
    cardContent: {
        margin: 10
    }
})  