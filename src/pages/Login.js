import React from 'react';
import { ImageBackground, Image, View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

import CustomButton from '../components/CustomButton'

export default function Login() {
  return (
    <>
      <ImageBackground source={require('../assets/fundo1.png')} style={styles.customBackground} resizeMode="stretch">

        <Text style={styles.title}>Farmacare</Text>

        <CustomButton style={styles.loginButton} />

        <TouchableOpacity>
          <Text style={styles.signIn}>Cadastrar</Text>
        </TouchableOpacity>

      </ImageBackground>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
  customBackground: {
    flex: 1,
    width: '100%',
    
    alignItems: 'center',
  },

  title: {
    fontFamily: 'NothingYouCouldDo_400Regular',
    fontSize: 36,
    color: '#FFF',
    marginTop: "20%",
    textAlign: 'center',
    marginBottom: "35%"
  },

  loginButton: {    
    marginTop: 200
  },

  signIn: {
    fontSize: 24,
    color: '#FFF',
    marginTop: '25%'
  }
})