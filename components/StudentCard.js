import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function StudentCard({ nombre, edad, imagen }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagen }} style={styles.image} />
      <Text style={styles.name}>{nombre}</Text>
      <Text style={styles.age}>Edad: {edad}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 16,
    color: '#555',
  },
});
