import React from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, } from 'react-native';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons'

import ItemList from '../../components/ItemList'
import CustomButton from '../../components/CustomButton'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BodyBox from '../../components/BodyBox';

import styles from './styles'

export default function Resultado() {  

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      <BodyBox/>
        <Header />

        <View style={styles.header}>

          <Text style={styles.title2}>Resultados</Text>

          <TouchableOpacity>
            <Feather name="search" color="#4284CE" size={30} />
          </TouchableOpacity>

        </View>

        <Text style={styles.title3}>Exalato de Escitaloplan</Text>


        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity>
            <View style={styles.ordenar}>
              <Text style={styles.ordenarText}>
                Ordenar
              </Text>
              <View>
                <Feather name="chevron-up" size={30} color='#1BD1F1' style={{ marginBottom: -8 }} />
                <Feather name="chevron-down" size={30} color='#1BD1F1' style={{ marginTop: -8 }} />
              </View>
            </View>
          </TouchableOpacity>

          <Ionicons name="cart-outline" size={40} color='#1BD1F1' style={{ paddingLeft: '5%' }} />
        </View>

        <View></View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
        >

          <ItemList />
          <ItemList />
          <ItemList />
          <ItemList />
          <ItemList />
          <ItemList />


          <TouchableOpacity>
            <View style={styles.endOfListText}>
              <Text style={{ textDecorationLine: 'underline', }} >
                Cerregar mais
              </Text>
              <AntDesign name="caretdown" color="#6FD3FF" size={24} />
            </View>
          </TouchableOpacity>

        </ScrollView>
        <View style={styles.customButton}>
          <CustomButton
            customButtonValue="Pagamento"
          />
        </View>
        
        <Footer />

       
     
    </>
  );
}

