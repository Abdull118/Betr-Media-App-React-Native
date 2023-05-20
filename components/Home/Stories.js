import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {USERS} from '../../data/users'

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {USERS.map((story, index) =>(
        <TouchableOpacity key={index} style={{alignItems: 'center'}}>
        <Image source={story.image} style={styles.story}/>
        <Text style={styles.user}>
            {story.user.length > 11 ? story.user.slice(0,10) + '...' : story.user}
            </Text>
        </TouchableOpacity>
      ))}
    
    </ScrollView>
    </View>
  )
}
const styles= StyleSheet.create({
    story:{
        width: 85,
        height: 85,
        borderRadius: 50,
        marginLeft: 10,
        borderWidth: 3,
        borderColor: '#FF8501'
    },
    user:{
        color: 'white', 
        marginTop: 5
    }
})
export default Stories