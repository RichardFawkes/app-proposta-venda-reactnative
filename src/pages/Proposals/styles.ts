import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ContainerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    width: 400,
    padding: 10,
    backgroundColor: '#ffff',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
  buttonEdit: {
    flex: 1,
    margin: 0,
    position: 'absolute',
    right: 4,
  },
  buttonTrash: {
    flex: 1,
    margin: 0,
    position: 'absolute',
    right: 15,
  },
  ProposalsName: {
    width: 200,
    textTransform: 'uppercase',
    color: '#333',
  },
  ProposalsCpf: {
    textTransform: 'uppercase',
    marginTop: 5,
    color: '#808080',
  },
  ProposalsCity: {
    textTransform: 'uppercase',
    marginTop: 5,
    color: '#808080',
  },
});
export default styles;
