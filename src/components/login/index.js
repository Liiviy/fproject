import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


const LOGIN = () => {
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [erro, setErro] = useState('');

    const handleLogin = () => {
      if (cpf === '12345' && celular === '1234'){
        console.log('Login efetuado.');
      } else {
        setErro('Senha ou usuário invalido.');
      }
    };
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/*-------------------TITULO-----------------------*/ }
        <Text style={styles.title}>ACESSAR</Text>
        {/*-------------------MENU LOGIN-----------------------*/ }
        <View style={styles.menu}>
  {/*-------------------LOGIN CPF-----------------------*/ }
        <Text style={styles.Text}>CPF:</Text>
         <TextInput 
         keyboardType="default" 
         style={styles.input}
         value={cpf}
         onChangeText={(texto) => setCpf(texto)}
         secureTextEntry
         />
{/*-------------------LOGIN CELULAR-----------------------*/ }
         <Text style={styles.Text}>CELULAR:</Text>
         <TextInput 
         keyboardType="numeric" 
         style={styles.input}
         value={celular}
         onChangeText={(texto) => setCelular(texto)}
         secureTextEntry/>
         {erro && <Text style={styles.erro}>{erro}</Text>}
        </View>
        {/*-------------------BOTÃO-----------------------*/ }
        <View sytle={styles.bt}>
          <Button
          title='Acessar Conta'
          color='#32AD55'
          onPress={handleLogin}
          />
          </View>
        {/*-------------------CADASTRO-----------------------*/ }
        <View style={styles.bottom}>
        <Text style={styles.Text}>Não possue uma? <Text>Crie uma</Text></Text>
        </View>
      </View>
    );
}

export default LOGIN; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#233B6B',
    alignItems: 'center',
    
  },

  input: {
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    marginTop: '5px',
  },

  menu:{
    flex: 2,
    justifyContent:'center',
    paddingBottom: '200px',
  },

  title: {
    fontWeight: 'bold',
    fontSize: '32px',
    color: '#F8FAFB',
    paddingTop: 80,


  },

  Text: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#F8FAFB',
    paddingTop: 15,


  },

  bottom:{
    paddingBottom: '50px',
  },
  erro:{
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#E4080A',

  },
});
