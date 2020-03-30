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
    alignItems: 'center',
    marginBottom: 10
  },
  incident: {
    backgroundColor: '#fff',
    padding: 24,
    marginTop: 18,
    marginBottom: 16,
    borderRadius: 8
  },
  incidentProperty: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#41414d',
    marginTop: 24
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 16,
    color: '#737380'
  },
  contactBox: {
    backgroundColor: '#fff',
    padding: 24,
    marginBottom: 16,
    borderRadius: 8
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#13131a',
    lineHeight: 30
  },
  heroDescription: {
    fontSize: 16,
    color: '#737380',
    marginTop: 16
  },
  contactActions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  actionsButton: {
    width: '48%',
    height: 50,
    backgroundColor: '#e02041',
    borderRadius: 8,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default styles;
