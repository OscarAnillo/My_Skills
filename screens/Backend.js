import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, ImageBackground, Image, Text, FlatList  } from 'react-native';
import Card from '../shared/Card'

const bgImage = require('../assets/bgBackEnd.jpg')

export default function FrontEnd(){
    const [skills, setSkills ] = useState([
        {name: 'Node', intro: 'I Learned Node.js with Codecademy, SOLOLEARN, MDN and Pirple.com', image: require('../assets/Node.png'), id: '1'},
        {name: 'PHP', intro: 'I Learned PHP with Codecademy, SOLOLEARN, MDN and W3CSchools.', image: require('../assets/PHP.png'), id: '2'},
        {name: 'SQL', intro: 'I Learned SQL with Codecademy, SOLOLEARN and W3CSchools', image: require('../assets/Sql.png'), id: '3'},
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