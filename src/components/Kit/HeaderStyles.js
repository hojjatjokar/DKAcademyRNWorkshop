import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
    paddingHorizontal: 8,
    paddingVertical: 16,
    ...Platform.select({
      ios: {
        paddingTop: 30
      },
      android: {}
    })
  },
  titleWrapper: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },
  input:{
    textAlign: 'right'
  }
});
