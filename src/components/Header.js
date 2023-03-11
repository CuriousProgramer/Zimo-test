import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'
import ContactList from './ContactList'
import ListItem from './ListItem'

export default function Header() {
  return (
    <>
        <View style={styles.header}>
            <Image style={{width: 15,height: 10}}  source={require('../assets/backArrow.png')}/>
            <Image style={{width: 80,height: 20}}  source={require('../assets/logo.png')}/>
            <Image style={{width: 17,height: 20}}  source={require('../assets/cart.png')}/>
        </View>
        <View style={{height: 1,width: '100%',backgroundColor: '#BE9F56',}}/>
        <View style={styles.header}>
            <Text style={{fontSize: 10,flex: 1}}>786 Contacts</Text>
            <Text style={{fontSize: 20,flex:1,textTransform: 'uppercase',textAlign: 'center'}}>Contacts</Text>
            <View style={{flex: 1,display: 'flex',justifyContent: 'flex-end',flexDirection: 'row'}}>
                <Image style={{width: 22,height: 18}}  source={require('../assets/users.png')}/>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.profileImg}>
            </View>
            <Text style={{fontSize: 17,textTransform: 'uppercase',marginRight: 'auto'}}>John Smith</Text>
            <Image source={require('../assets/plus.png')}/>
        </View>
        <View style={styles.row}>
            <View style={{height: 1,width: '100%',backgroundColor: '#BE9F56'}}/>
        </View>
        <ContactList>
            <ListItem/>
            <ListItem isZimo={true}/>
        </ContactList>
    </>
  )
}


const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 15
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20
    },
    profileImg: {
        height: 47,
        width: 47,
        borderRadius: 47,
        backgroundColor: '#BE9F56',
        marginRight: 10
    }

})