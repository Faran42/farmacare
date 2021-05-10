import React from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import ItemList from '../components/ItemList'

export default function Resultado() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      <ImageBackground
        source={require('../assets/fundoBranco.png')}
        style={styles.imageContainer}
        resizeMode="stretch"
      >
        <View style={styles.header}>

          <Text style={[styles.title, { width: '80%' }]}>Farmacare</Text>

          <TouchableOpacity style={{ marginTop: "13%", marginBottom: "10%" }}>
            <Feather name="menu" color="#4284CE" size={30} />
          </TouchableOpacity>

        </View>

        <View style={styles.header}>

          <Text style={[styles.title2, { width: '80%' }]}>Resultados</Text>

          <TouchableOpacity style={{ marginBottom: "10%" }}>
            <Feather name="search" color="#4284CE" size={34} />
          </TouchableOpacity>

        </View>

        <Text style={styles.title3}>Exalato de Escitaloplan</Text>


        <View style={{ flexDirection: 'row' }}>
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

          <Ionicons name="cart-outline" size={40} color='#1BD1F1' style={{ width: '25%' }} />


        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: 'transparent', width: '90%', marginTop: 25 }}
        >

          <ItemList/>
          <ItemList/>
          <ItemList/>
          <ItemList/>
          <ItemList/>
          <ItemList/>
          <ItemList/>
          <ItemList/>
          <ItemList/>
          <ItemList/>

          <Text>
            Cerregar mais
            e adcionar icones
          </Text>





















        </ScrollView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row'
  },

  title: {
    fontFamily: 'NothingYouCouldDo_400Regular',
    fontSize: 28,
    marginTop: "12%",
    marginBottom: "10%",
    color: "#4284CE"
  },

  title2: {
    fontSize: 28,
    marginBottom: "10%",
    color: '#000'
  },

  title3: {
    fontSize: 20,
    marginBottom: "10%",
    color: '#38A9E8'
  },

  ordenar: {
    flexDirection: 'row',
    width: '60%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,    
    marginLeft: '20%'

  },

  ordenarText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: '8%'

  }

})