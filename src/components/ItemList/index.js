import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles'

export default function ItemList(props) { 

  return (
    <View style={styles.container} >
      <View name='image'>
        <Image
          source={require('../../assets/remedios/remedio1.png')}
          style={{ width: 90, height: 140 }}
        />
      </View>

      <View name='info'>
        <Text name="price" style={styles.price}>
          R$ 31,90
        </Text>
        <Text name="lab" style={styles.lab}>
          Medley
        </Text>
        <Text name="deliveryTime" style={styles.deliveryTime}>
          2000 dias para entarega
        </Text>
        <View style={{ flexDirection: 'row', marginTop: '5%' }}>
          <Text name="details" style={styles.details}>
            Detalhes
          </Text>
          <Ionicons name='chevron-forward' size={24} color='#1BD1F1' />
        </View>
      </View>

      <View name='icons' style={{ marginLeft: -50 }}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name='checkbox-outline' size={28} color='#1B9F18' />
          <Text> Genérico</Text>
        </View>

        <TouchableOpacity onPress={props.onPress}>

          <Ionicons
            name='cart-outline'
            size={34} color='#fff'
            style={styles.scrollCartIcon}
          />
        </TouchableOpacity>

      </View>
    </View>
  );
}
