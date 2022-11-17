import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1f1e25',
    marginBottom: 10
  },
  name: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#fff'
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: '#e23c44',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
})