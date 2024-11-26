import React from 'react';
import Navbar from './src/components/Navbar/navbar';
import Navbartop from './src/components/Navbar/navbartop';
import { View, StyleSheet, Text } from 'react-native';

const AppLayout = () => {
 return (
<View style={styles.main}>
    <Navbartop />
    <View style={styles.navigation}>
        <Navbar />
            <View style={styles.col1}>
                <Text>COLUNA 1</Text>
            </View>
            <View style={styles.col2}>
                <Text>COLUNA 2</Text>
            </View>
    </View>
</View>
 );
};

export default AppLayout;


const styles = StyleSheet.create({
    main :{
        flex: 1,
        flexDirection: 'column',
    },
    navigation: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#a3ffb4',
    },
    col1:{
       backgroundColor: '#e1c0b6',
    },
    col2:{
        backgroundColor: '#843c54',
     },

    
})