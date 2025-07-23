import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import StudentCard from '../components/StudentCard';

export default function StudentScreen({ navigation }) {
  const studentData = {
    nombre: 'Mateo García',
    edad: 20,
    imagen: 'https://randomuser.me/api/portraits/men/75.jpg',
  };

  return (
    <View style={styles.container}>
      <StudentCard
        nombre={studentData.nombre}
        edad={studentData.edad}
        imagen={studentData.imagen}
      />
      <Button title="Volver al Inicio" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
});
