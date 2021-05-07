import React from 'react';
import { ImageBackground, Image, View, Text, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'


import CustomButton from '../components/CustomButton'

export default function Login() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent={true} />
      <ImageBackground source={require('../assets/fundo1.png')} style={styles.customBackground} resizeMode="stretch">

        <Text style={styles.title}>Farmacare</Text>

        <CustomButton 
          onPress={() => navigation.navigate('entrar')} 
          customButtonValue={'Login'}
        />

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

  signIn: {
    fontSize: 24,
    color: '#FFF',
    marginTop: '25%'
  }
})