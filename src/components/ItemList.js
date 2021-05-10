import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function ItemList() {
  return (
    <View style={styles.container} >
      <View name='barras'>

      </View>
      <View name='image'>
        <Image source={require('../assets/remedios/remedio1.png')} />
      </View>

      <View name='info'>
        <Text name="price" style={styles.price}>
          R$ 31,90
        </Text>
        <Text name="lab" style={styles.lab}>
          Medley
        </Text>
        <Text name="deliveryTime" style={styles.deliveryTime}>
          2 dias para entrega
        </Text>
        <View style={{ flexDirection: 'row', marginTop: '23%' }}>
          <Text name="details" style={styles.details}>
            Detalhes
          </Text>
          <Ionicons name='chevron-forward' size={28} color='#1BD1F1' />
        </View>
      </View>

      <View name='icons'>
        <View style={{ flexDirection: 'row', marginLeft: '10%' }}>
          <Ionicons name='checkbox-outline' size={28} color='#1B9F18' />
          <Text> Genérico</Text>
        </View>

        <Ionicons
          name='cart-outline'
          size={34} color='#fff'
          style={{ marginLeft: '40%', marginTop: '35%', backgroundColor: '#1BD1F1', width: '25%' }}
          
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    borderColor: '#cccccc',
    borderRightWidth: 2,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 3,
    borderRadius: 5,
    padding: 5
  },

  price: {
    color: '#1BD1F1',
    fontSize: 23,
  },

  lab: {
    fontWeight: 'bold',
  },

  deliveryTime: {
    fontWeight: '100',
    fontSize: 10
  },

  details: {
    fontSize: 18,
    color: '#1BD1F1',

  }
})