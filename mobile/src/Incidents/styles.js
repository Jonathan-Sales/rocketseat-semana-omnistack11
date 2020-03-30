import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 16,
    color: '#737380'
  },
  headerTextBold: {
    fontWeight: 'bold'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#13131a',
    marginTop: 38,
    marginBottom: 16
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },
  incidentList: {
    marginTop: 32
  },
  incident: {
    backgroundColor: '#fff',
    padding: 24,
    marginBottom: 16,
    borderRadius: 8
  },
  incidentProperty: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#41414d'
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 16,
    marginBottom: 24,
    color: '#737380'
  },
  incidentButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  incidentButtonText: {
    color: '#e02041',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default styles;
