import React from 'react';
import { View, SafeAreaView, ImageBackground, StyleSheet, StatusBar, Text, InputText, TextInput, } from 'react-native';
import { } from 'react-native-elements'
import CustomButton from '../components/CustomButton'
import { Feather, Ionicons } from '@expo/vector-icons'
import { CheckBox } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Entrar() {

  const navigation = useNavigation();

  const [checkedState, setCheckedState] = React.useState(false)

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
        <View style={styles.marca}>
          <TextInput style={styles.input} >
          </TextInput>
          <Ionicons name="caret-forward-outline" color="#1BD1F1" size={20} style={{ marginLeft: -95, marginRight: 80 }} />
        </View>


        <Text style={styles.inputLabel}>Endereço</Text>
        <TextInput style={styles.input} />

        <Text style={styles.inputLabel}>Genérico?</Text>

        <CheckBox
          center
          checked={checkedState}
          onPress={() => setCheckedState(!checkedState)}
        />

        <CustomButton
          style={{ elevation: 5 }}
          customButtonValue={['Buscar  ',
            <Feather key={Math.random} name="search" size={24} />
          ]}
          onPress={() => navigation.navigate('resultado')}
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
    marginTop: "15%",
    textAlign: 'center',
    marginBottom: "10%"
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
    marginBottom: 15,
    width: 200
  },

  marca: {
    flexDirection: 'row'
  }
})