import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ListItem({name,phone,isZimo}) {
  return (
    <View style={styles.listContainer}>
      <View style={{...styles.flex,width: '85%'}}>
        <Text style={{flex: 1,fontSize: 10}}>{name}</Text>
        <Text style={{flex: 1,color:'#737373',fontSize: 10}}>{phone}</Text>
      </View>
      {
        isZimo ? <Image source={require('../assets/zimoLogo.png')}/> :
        <Text style={{color: '#BE9F56',letterSpacing: .7,textTransform: 'uppercase',fontSize: 12}}>Invite</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
    listContainer: {
        marginVertical: 3,
        marginHorizontal: 20,
        paddingVertical: 5,
        display: 'flex',flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderColor: '#737373',
        paddingVertical: 5,
    }
})