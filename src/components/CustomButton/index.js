import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles'

export default function CustomButton(props) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <LinearGradient colors={['#66BEFF', '#1BD1F1']} style={styles.button}>
          <Text style={styles.textButton}>{props.customButtonValue}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}