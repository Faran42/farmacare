import { StyleSheet } from 'react-native'

let styles = {}

export default styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: '100%',
    height: '25%',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  itemCartImage: {
    width: 160,
    height: 230,
    resizeMode: 'stretch',
    marginLeft: -15
  },

  description: {
    marginTop: 30,
    paddingRight: '10%',
    width: '50%'
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  lab: {
    fontSize: 18,
    marginBottom: 5
  },

  price: {
    color: '#1BD1F1',
    fontSize: 24,
    marginBottom: 5
  },

  deliveryTime: {
    fontWeight: '100',
    color: '#1F2224'
  },

  isGeneric: {
    fontWeight: '100',
    color: '#1F2224',
    marginBottom: 5
  },

  icons: {
    flexDirection: 'row', 
  },

  cartIcon: {
    backgroundColor: '#37A8E8',
    width: 44,
    paddingTop: 5,
        
  },

  quantity: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1BD1F1',
    marginLeft: 10,
    width: 120
  },

  quantityText: {
    fontSize: 28,
    color: "#fff",
    paddingLeft: 5    
  },

  quantityIcons: {
    flexDirection: 'row',
    paddingTop: 3
  }

})