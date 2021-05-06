import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CustomButton() {
  return (
    <TouchableOpacity >
      <LinearGradient colors={['#66BEFF', '#1BD1F1']} style={styles.button}>
        <Text style={styles.textButton}>Login</Text>
      </LinearGradient>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1BD1F1",
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textButton: {
    color: '#FFFEFE',
    fontSize: 28,
    paddingHorizontal: 50,
    paddingVertical: 4
  }
})