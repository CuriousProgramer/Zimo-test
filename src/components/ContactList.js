import { View, Text, FlatList, SectionList } from 'react-native'
import React from 'react'
import ListItem from './ListItem';

export default function ContactList({children}) {
    const alpha = [
        {
            title: 'A',
            active: true,
        },
        {
            title: 'B',
            active: false,
        },
        {
            title: 'C',
            active: false,
        },
        {
            title: 'D',
            active: false,
        },
        {
            title: 'E',
            active: false,
        },
        {
            title: 'F',
            active: false,
        },
        {
            title: 'G',
            active: false,
        },
        {
            title: 'H',
            active: false,
        },
        {
            title: 'F',
            active: false,
        },
        {
            title: 'I',
            active: false,
        },
        {
            title: 'J',
            active: false,
        },
        {
            title: 'K',
            active: false,
        },
        {
            title: 'L',
            active: false,
        },
        {
            title: 'M',
            active: false,
        },
        {
            title: 'F',
            active: false,
        },
        {
            title: 'N',
            active: false,
        },
        {
            title: 'O',
            active: false,
        },
        {
            title: 'P',
            active: false,
        },
        {
            title: 'Q',
            active: false,
        },
        {
            title: 'R',
            active: false,
        },
        {
            title: 'S',
            active: false,
        },
        {
            title: 'T',
            active: false,
        },
        {
            title: 'U',
            active: false,
        },
        {
            title: 'V',
            active: false,
        },
        {
            title: 'W',
            active: false,
        },
        {
            title: 'X',
            active: false,
        },
        {
            title: 'Y',
            active: false,
        },
        {
            title: 'Z',
            active: false,
        },

    ]
    
    const DATA = [
        {
          title: 'A',
          data: [
            {
                name: 'Abbey Longton',
                phone: '+44 7867 123987',
                isZimo: false,
              },
              {
                name: 'Abbot Jones',
                phone: '+44 7867 123987',
                isZimo: false,
              },
              {
                  name: 'Ab Tevin',
                  phone: '+44 7867 123987',
                  isZimo: true,
              },
              {
                  name: 'Adele Parker',
                  phone: '+44 7867 123987',
                  isZimo: true,
              },
              {
                  name: 'Adrian Thompson',
                  phone: '+44 7867 123987',
                  isZimo: false,
              },
              {
                  name: 'Adriana',
                  phone: '+44 7867 123987',
                  isZimo: false,
              },
              {
                  name: 'Alan Wilson',
                  phone: '+44 7867 123987',
                  isZimo: true,
              },
              {
                  name: 'Alison Vitam',
                  phone: '+44 7867 123987',
                  isZimo: false,
              },
              {
                  name: 'Anaya Zahid',
                  phone: '+44 7867 123987',
                  isZimo: false,
              },
              {
                  name: 'Andrew Hart',
                  phone: '+44 7867 123987',
                  isZimo: true,
              },
          ],
        },
        {
          title: 'B',
          data: [
            {
                name: 'Ben Davies',
                phone: '+44 7867 123987',
                isZimo: false,
              },
              {
                name: 'Bill Lomas',
                phone: '+44 7867 123987',
                isZimo: false,
              },
              {
                  name: 'Bob Dillan',
                  phone: '+44 7867 123987',
                  isZimo: true,
              },
              {
                  name: 'Brian Swift',
                  phone: '+44 7867 123987',
                  isZimo: true,
              },
              {
                  name: 'Brie Templton',
                  phone: '+44 7867 123987',
                  isZimo: false,
              },
              {
                  name: 'Bryan Smith',
                  phone: '+44 7867 123987',
                  isZimo: false,
              },
              {
                  name: 'Bryan Shields',
                  phone: '+44 7867 123987',
                  isZimo: true,
              },
              {
                  name: 'Bob Dempsey',
                  phone: '+44 7867 123987',
                  isZimo: false,
              },
              {
                  name: 'Bryce Walker',
                  phone: '+44 7867 123987',
                  isZimo: false,
              },
              {
                  name: 'Big Show',
                  phone: '+44 7867 123987',
                  isZimo: true,
              },
          ],
        },
      ];
      
      
  return (
    <View style={{position: 'relative'}}>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
                <FlatList
                data={[item]}
                renderItem={({ item }) => <ListItem name={item.name} phone={item.phone} isZimo={item.isZimo}/>}
                />
            )}
            renderSectionHeader={({ section: { title } }) => (
                <View style={{ padding: 16, }}>
                <Text style={{ color: '#000' }}>{title}</Text>
                </View>
            )}
            contentContainerStyle={{ paddingBottom: 670,width: '95%' }}
        />
        <View style={{position: 'absolute',top: 0,right: 0}}>
            {
                alpha.map(item=><Text style={{fontSize: 12,color: item.active ? '#BE9F56' : '#707070',marginBottom: 2}}>{item.title}</Text>)
            }
        </View>
    </View>
    
  )
}