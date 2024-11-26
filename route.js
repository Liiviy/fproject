import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const routes = ({ route }) => {
  const { cpf, celular } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo!</Text>
      <Text>CPF: {cpf}</Text>
      <Text>Celular: {celular}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
  },
});

export default routes;