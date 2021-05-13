import React from 'react';
import { ImageBackground } from 'react-native';

import styles from './styles'

export default function BodyBox() {
  return (
    <ImageBackground
        source={require('../../assets/fundoBranco.png')}
        style={styles.imageContainer}
        resizeMode="stretch"
        
      />
  );
}