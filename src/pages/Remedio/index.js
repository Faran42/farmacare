import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Header from '../../components/Header'
import BodyBox from '../../components/BodyBox'
import Footer from '../../components/Footer'
import ItemCart from '../../components/ItemCart'

import styles from './styles';


export default function Remedio() {
  return (
    <>
      <BodyBox />
      <Header />
      <ItemCart />
      <TouchableOpacity style={styles.pagamento}>
        <Text style={styles.cardIcon}>
          xxxxxxxxxxx
        </Text>
        <Text style={styles.text}>
          Pagamento
        </Text>
      </TouchableOpacity>

      <Footer />
    </>
  );
}