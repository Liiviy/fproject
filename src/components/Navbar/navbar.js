import React from 'react';

import {View, FlatList, Text, StyleSheet, Pressable} from 'react-native';


const LIST = [
  {
    id: 'First',
    title: 'first item',
  },
  {
    id: 'second',
    title: 'teste',
  },
];

const ItemList = ({title}) => (
    <Pressable>
      <Text>{title}</Text>
    </Pressable>
);

const Navbar = () => (
  <View style={styles.navbar}>
    <FlatList
    data={LIST}
    renderItem={({item}) => <ItemList title={item.title}/>}
    keyExtractor={item => item.id}
    />
  </View>

);

const styles = StyleSheet.create({
  navbar:{
    backgroundColor: '#6275A3',
    margin: '0px',
    padding: '0px',
    width: '100px',
    height: '100vh',
    alignItems: 'center',
  },
})

export default Navbar;