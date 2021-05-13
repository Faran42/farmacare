import { StyleSheet } from 'react-native'

let styles = {} 

export default styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    borderColor: '#cccccc',
    borderRightWidth: 2,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 3,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'space-around'
  },

  price: {
    color: '#1BD1F1',
    fontSize: 23,
  },

  lab: {
    fontWeight: 'bold',
  },

  deliveryTime: {
    fontWeight: '100',
    fontSize: 14,
    width: '60%'
  },

  details: {
    fontSize: 18,
    color: '#1BD1F1',
  },

  scrollCartIcon: {
    backgroundColor: '#1BD1F1',
    width: 38,
    marginTop: 50,
    marginLeft: 50
  }
})