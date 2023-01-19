import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15,
    justifyContent: 'center',
    padding: 50,
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  Input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
    borderRadius: 5,
  },
  SaveButton: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  iconButtonSave: {
    color: '#fff',
  },
});
export default styles;
