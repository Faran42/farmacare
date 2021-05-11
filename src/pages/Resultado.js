import React from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons'

import ItemList from '../components/ItemList'
import CustomButton from '../components/CustomButton'

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

          <Text style={styles.title}>Farmacare</Text>

          <TouchableOpacity style={styles.titleIcon}>
            <Feather name="menu" color="#4284CE" size={30} />
          </TouchableOpacity>

        </View>

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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Feather name="chevron-left" color='#fff' size={40} />
          <View style={{ flexDirection: 'row', paddingRight: '5%' }}>
            <Feather name="search" color='#fff' size={28} />
            <Ionicons name="cart-outline" color='#fff' size={28} color='#fff' style={{ paddingLeft: '10%' }} />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: "10%"
  },

  title: {
    fontFamily: 'NothingYouCouldDo_400Regular',
    fontSize: 28,
    marginTop: "10%",
    color: "#4284CE"
  },

  titleIcon: {
    marginTop: "10%",
  },

  title2: {
    fontSize: 28,
    marginBottom: "2%",
    color: '#000'
  },

  title3: {
    fontSize: 22,
    marginBottom: "3%",
    color: '#38A9E8',
    textAlign: 'center'
  },

  ordenar: {
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 5
  },

  ordenarText: {
    textAlign: 'center',
    fontSize: 18,
  },

  scrollContainer: {
    backgroundColor: 'transparent',
    width: '90%',
    marginHorizontal: '5%',

  },

  endOfListText: {
    marginVertical: '6%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  customButton: {
    alignItems: 'center',
    marginBottom: '20%',
    marginTop: 5,
    borderRadius: 10
  }

})