import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ItemCart() {

  const [quantity, setQuantity] = useState(0)

  function handleQuantity(operation) {
    
    if (operation === 'plus'){
      const valor = quantity
      setQuantity(valor+1)
    }

    if(operation === 'minus' && quantity > 0){
      const valor = quantity
      setQuantity(valor-1)
    }
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/remedios/remedio2.png')}
        style={styles.itemCartImage}
      />
      <View style={styles.description}>
        <Text name="title" style={styles.title}>
          Exalato de Escitaloplana
        </Text>
        <Text name="lab" style={styles.lab}>
          Geolab
        </Text>
        <Text name="price" style={styles.price}>
          R$ 32,90
        </Text>
        <Text name="deliveryTime" style={styles.deliveryTime}>
          1 dia para entrega
        </Text>
        <Text name="isGeneric" style={styles.isGeneric}>
          Genérico
        </Text>
        <View name="icons" style={styles.icons}>
          <Ionicons
            name='cart-outline'
            size={30} color='#fff'
            style={styles.cartIcon}
          />

          <View style={styles.quantity}>
            <Text style={styles.quantityText}>
              {quantity}
            </Text>
            <View style={styles.quantityIcons}>
              
              <TouchableOpacity onPress={() => handleQuantity('minus')}>
                <Ionicons name="remove-outline" color="#fff" size={30} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleQuantity('plus')}>
                <Ionicons name="add-outline" color="#fff" size={30} />
              </TouchableOpacity>

            </View>


          </View>
        </View>

      </View>
    </View>
  );
}