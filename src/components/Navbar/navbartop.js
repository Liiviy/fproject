import React from 'react';

import {View, FlatList, Text, StyleSheet} from 'react-native';


const LIST1 = [
  {
    id: '45c48cce2e34f8f1f3e3c2d1a',
    title: 'GRU+',
  },

];

const ItemList1 = ({title}) => (
  <View>
    <Text style={styles.titulo}>{title}</Text>
  </View>
);

const Navbartop = () => (
  <View style={styles.navbartop}>
    <FlatList
    data={LIST1}
    renderItem={({item}) => <ItemList1 title={item.title}/>}
    keyExtractor={item => item.id}
    />
  </View>

);

const styles = StyleSheet.create({
  navbartop:{
    backgroundColor: '#233B6B',
    margin: '0px',
    padding: '0px',
    width: '100vw',
    height: '55px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#F8FAFB',
    fontWeight: 'bold',
    fontSize: '24px',
    alignItems: 'center',
    margin:'10px',
  },
})

export default Navbartop;