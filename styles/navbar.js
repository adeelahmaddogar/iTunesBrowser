import React, {StyleSheet} from 'react-native';




var navbar = StyleSheet.create({
  appearance: {
    backgroundColor: '#2A3744',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'

  },
  title: {
    color: '#FEFEFE',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1

  },
  button: {
    color: '#FEFEFE',
    textAlign: 'center',
    width: 50
  },
  emptyView: {
    width: 50
  }

});

module.exports = navbar;
