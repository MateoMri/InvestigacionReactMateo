import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Módulo 3.5</Text>
      <Text style={styles.description}>
        Este módulo enseña a crear componentes reutilizables y funcionales en apps móviles con React Native,
        trabajando navegación entre pantallas, props y buenas prácticas de desarrollo.
      </Text>
      <Button title="Ver Estudiante" onPress={() => navigation.navigate('Estudiante')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});
