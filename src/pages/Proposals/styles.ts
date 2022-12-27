import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Proposals: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  Header: {
    color: 'red',
  },

  deleteProposals: {
    justifyContent: 'center',
    paddingLeft: 15,
  },
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ButtonNew: {
    position: 'absolute',
    width: '90%',
    height: 40,
    bottom: 50,
    padding: 6,
    backgroundColor: '#41a4f3',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  IconButtonNew: {
    color: '#fff',
    fontSize: 20,
  },

  ButtonReport: {
    position: 'absolute',
    width: '90%',
    height: 40,
    padding: 6,
    bottom: 1,
    backgroundColor: '#72bb53',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  IconButtonReport: {
    color: '#fff',
    fontSize: 20,
    flex: 1,
  },
});
export default styles;
