import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/*-------------------TITULO-----------------------*/ }
      <Text style={styles.title}>ACESSAR</Text>
      {/*-------------------MENU LOGIN-----------------------*/ }
      <View style={styles.menu}>

      <Text style={styles.Text}>NOME:</Text>
       <TextInput keyboardType="default" style={styles.input}/>
       <Text style={styles.Text}>CPF:</Text>
       <TextInput keyboardType="numeric" style={styles.input}/>
       <Text style={styles.Text}>RG:</Text>
       <TextInput keyboardType="numeric" style={styles.input}/>
       <Text style={styles.Text}>DATA DE NASCIMENTO:</Text>
       <TextInput keyboardType="numeric" style={styles.input}/>
       <Text style={styles.Text}>E-MAIL:</Text>
       <TextInput keyboardType="default" style={styles.input}/>
       <Text style={styles.Text}>CELULAR:</Text>
       <TextInput keyboardType="numeric" style={styles.input}/>

      </View>
      {/*-------------------BOTÃO-----------------------*/ }
      <View sytle={styles.bt}>
        <Button
        title='Validar Cadastro'
        color='#32AD55'
        />
        </View>
      {/*-------------------CADASTRO-----------------------*/ }
      <View style={styles.bottom}>
      <Text style={styles.Text}>Já possue uma? <Text>Acessar</Text></Text>
      </View>
    </View>
  );
}

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
    paddingBottom: '100px',
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
    paddingBottom: '20px',
  },
});