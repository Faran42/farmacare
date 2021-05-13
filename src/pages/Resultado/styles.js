import { StyleSheet } from 'react-native' 

let styles = {} 

export default styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: "10%"
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