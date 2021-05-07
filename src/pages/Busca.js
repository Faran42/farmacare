import React from 'react';
import { View, SafeAreaView, ImageBackground, StyleSheet, StatusBar, Text, InputText, TextInput } from 'react-native';
import CustomButton from '../components/CustomButton'
import { Feather } from '@expo/vector-icons'

export default function Entrar() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      <ImageBackground
        source={require('../assets/fundoBranco.png')}
        style={styles.imageContainer}
        resizeMode="stretch"
      >
        
          <Text style={styles.title}>Farmacare</Text>

          <Text style={styles.inputLabel}>Medicamento</Text>
          <TextInput style={styles.input}></TextInput>

          <Text style={styles.inputLabel}>Marca</Text>
          <TextInput style={styles.input}></TextInput>

          <Text style={styles.inputLabel}>Endereço</Text>
          <TextInput style={[styles.input, { marginBottom: '20%'}]}></TextInput>
          

          <CustomButton 
            style={{ elevation: 5}}
            customButtonValue={['Buscar  ',
            <Feather name="search" size={24}/>
          ]}
          />
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

  title: {
    fontFamily: 'NothingYouCouldDo_400Regular',
    fontSize: 36,
    marginTop: "20%",
    textAlign: 'center',
    marginBottom: "15%"
  },

  inputLabel: {
    color: '#1F2224',
    textAlign: 'center',
    fontSize: 14
  },

  input: {    
    alignContent: 'center',
    marginHorizontal: '20%',    
    borderBottomWidth: 1,
    borderBottomColor: '#37A8E8',
    marginTop: 10,
    marginBottom: 20,
    width: 200
  }
})