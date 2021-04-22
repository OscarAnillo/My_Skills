import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, ImageBackground, Image, Text, FlatList  } from 'react-native';
import Card from '../shared/Card'

const bgImage = require('../assets/daftPunk.jpg')

export default function FrontEnd(){
    const [skills, setSkills ] = useState([
        {name: 'HTML', intro: 'I Learned HTML with Codecademy, SOLOLEARN, MDN and W3CSchools among others', image: require('../assets/html.png'), id: '1'},
        {name: 'CSS', intro: 'I Learned CSS with Codecademy, SOLOLEARN, MDN and W3CSchools, Kevin Powell, among others', image: require('../assets/css.png'), id: '2'},
        {name: 'JS', intro: 'I Learned JavaScript with Codecademy, SOLOLEARN, MDN and W3CSchools,  among others', image: require('../assets/Javascript.png'), id: '3'},
        {name:'React Native', intro:'I learned React native with several online tutorials and spending tons and tons of hours creating my own projects', image: require('../assets/react-native.png'), id:'4' },
        {name:'React', intro:'I learned React with Reed Barger and Codecademy tutorials and spending tons and tons of hours creating my own projects', image: require('../assets/React.png'), id:'5' },
        {name:'Gatsby', intro:'I learned Gatsby with its official docs and spending tons and tons of hours creating my own projects', image: require('../assets/gatsby.png'), id:'6' },
        {name:'Git', intro:'I learned Git version control with Codecademy and its official documents plus the million hours spent on its use', image: require('../assets/Git-icon.png'), id:'7' },
        {name:'Postman', intro:'I learned Postman with its official documents plus the million hours spent on its use', image: require('../assets/postman.png'), id:'8' },
        {name:'Ps', intro:'I learned Photoshop for web development with its official documents, Domestika courses plus the million hours spent on its use', image: require('../assets/Ps.png'), id:'9' },
    ])
    return(
        <ImageBackground source={bgImage} style={styles.container}>
            
                
                        <FlatList 
                            data={skills}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Card>    
                                    <View style={styles.skillsContainer}>
                                        <Image source={item.image} style={styles.image} />
                                        <Text style={{width: 280}}>{item.intro}</Text>
                                    </View>
                                </Card>
                            )}
                        />
                        
                
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    skillsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        height: 80,
        width: 80,
    }
})