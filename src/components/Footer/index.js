import React from 'react';
import { View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'

import styles from './styles';

export default function Footer() {
  return (
    <>
      <View style={styles.footerLeft}>
        <Feather name="chevron-left" color='#fff' size={40} />
      </View>

      <View style={styles.footerRight}>
        <Feather name="search" color='#fff' size={28} />
        <Ionicons name="cart-outline" color='#fff' size={28} style={{ paddingLeft: '5%' }} />
      </View>
    </>
  );
}