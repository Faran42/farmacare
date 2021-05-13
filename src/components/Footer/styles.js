import { StyleSheet } from 'react-native' 

let styles = {} 

export default styles = StyleSheet.create({
  footerLeft: { 
    position: 'absolute', 
    left: 0, 
    right: 0, 
    bottom: 0,
    paddingBottom: 20
  },

  footerRight: {
    position: 'absolute', 
    right: 0, 
    bottom: 0,
    flexDirection: 'row',
    paddingRight: '5%',
    paddingBottom: 25
  
  }  
})