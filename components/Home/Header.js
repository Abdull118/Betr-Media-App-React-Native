import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </TouchableOpacity>

      <View style={styles.icons}>

      <TouchableOpacity>
      <Image style={styles.icon} source={require('../../assets/plusIcon.png')} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.icon} source={require('../../assets/heart-regular.png')} />
        </TouchableOpacity>
      
      <TouchableOpacity>
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}>11</Text>
        </View>
      <Image style={styles.icon} source={require('../../assets/paper-plane-light.png')} />
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },

    logo: {
       width: 100,
       height: 50,
       resizeMode: 'contain'
    },

    icons:{
        flexDirection: 'row'
    },

    icon:{
        width: 30,
       height: 30,
       resizeMode: 'contain',
       tintColor: 'white',
       marginLeft: 10
    },

    unreadBadge:{
      backgroundColor:'#FF3250',
      position:'absolute',
      left: 30,
      bottom: 18,
      width: 25,
      height: 18,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1
    },

    unreadBadgeText:{
      color: 'white',
      fontWeight: '600'
    }
})
export default Header