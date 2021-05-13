import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function Header() {
  return (
    <View style={styles.header}>

      <Text style={styles.title}>Farmacare</Text>

      <TouchableOpacity style={styles.titleIcon}>
        <Feather name="menu" color="#4284CE" size={30} />
      </TouchableOpacity>

    </View>
  );
}