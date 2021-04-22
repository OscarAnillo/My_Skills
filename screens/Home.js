import React, { useState, useLayoutEffect } from 'react'
import {StyleSheet, View, ImageBackground, Text, Button} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const image = require('../assets/meEdited.jpg')

export default function Home({ navigation }){
  const [count, setCount] = useState(0);
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialIcons name="menu" size={44} color="#fff"  onPress={() => {setCount((prevState) => prevState + 1)}} />
        
      )
    })
  })

    return (
        <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
          <Text style={styles.textTitle}>Oscar Anillo</Text>
          <Text style={styles.text}>Web Developer</Text>
          <View style={styles.skills}>
            <Button title="Front End Skills" color="coral" onPress={() => navigation.navigate('Front-End')} />
            <Button title="Back End Skills " color="#5FB2C3" onPress={() => navigation.navigate('Back-End')}/>
          </View>
          </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',

    },
    textTitle: {
      color: '#fff',
      fontSize: 44,
      fontFamily: 'Poppins-Bold',
      textTransform: 'uppercase',
      marginLeft : 10
    },
    text: {
      color: '#fff',
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      marginLeft : 10
    },
    skills: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      textAlign: 'center',
      paddingVertical: 15
    },
    skillText: {
      color: 'red'
    }
  });
  