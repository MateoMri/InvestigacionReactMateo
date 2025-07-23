import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Módulo 3.5</Text>
      <Text style={styles.description}>
        Desarrollo de componentes para dispositivos móviles.
      </Text>
      <Button title="Ver Estudiante" onPress={() => navigation.navigate('Estudiante')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  description: { fontSize: 16, marginVertical: 10, textAlign: 'center' },
});
