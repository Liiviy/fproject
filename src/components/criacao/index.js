import React from 'react'; 
import Navbar from './src/components/Navbar/navbar';
import Navbartop from './src/components/Navbar/navbartop';
import { View, StyleSheet, Text, Pressable } from 'react-native';

const App = () => {
 return (
<View style={styles.main}>
    <Navbartop />
    <View style={styles.navigation}>
        <Navbar />
            <View style={styles.col1}>
                 <Pressable style={styles.item}>
                        <Text style={styles.titulo}>CADASTRE SUA NOTICIA</Text>
                 </Pressable>
                 <Text style={styles.titulo}>OU</Text>
                 <Pressable style={styles.item}>
                        <Text style={styles.titulo}>CRIE UMA COMUNIDADE</Text>
                 </Pressable>

            </View>
    </View>
</View>
 );
};

export default App;


const styles = StyleSheet.create({
    main :{
        flex: 1,
        flexDirection: 'column',
    },
    navigation: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#BFD3EC',
    },
    col1:{
        flex: 2,
        flexGrow: 3,
       backgroundColor: '#BFD3EC',
       justifyContent:'space-around',
       alignItems: 'center',
    },
    item:{
        padding: '30px',
        margin: '15px',
        marginBottom:'5px',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'10px',
        backgroundColor: '#14A5FF',
     },
     titulo:{
        color: '#F8FAFB',
        fontWeight: 'bold',
     },
    
})