import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },

  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16
  },
  input: {
    flex: 1,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    height: 56,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    marginRight: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: '#31cf67',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  listEmptyText: {
    textAlign: 'center',
    fontSize: 20,
     
    color: '#fff'
  }
 })

