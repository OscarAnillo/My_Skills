import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

const image = { uri: 'https://sexhd.pics/gallery/buttman/anikka-albrite/mainstream-ass-xxxpicture/anikka-albrite-6.jpg'}

export default function About({ route }){
    const {name, special, PreferedHole} = route.params;
    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>Her Asshole</Text>
            <Text style={{fontSize: 16, color:'magenta'}}>Name: {name}</Text>
            <Text style={{fontSize: 16, color: 'orange'}}>Skill: {special}</Text>
            <Text style={{fontSize: 16, color: 'red'}}>Preferred Hole: {PreferedHole}</Text>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff'
    }
})