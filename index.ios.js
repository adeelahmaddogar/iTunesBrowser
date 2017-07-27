

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  StatusBarIOS,
  NavigatorIOS,
  AlertIOS
} from 'react-native';

StatusBarIOS.setStyle('light-content');

export default class iTunesBrowser extends Component {
  render() {
    return (
      <View style={styles.global.mainContainer}>
        <View style={styles.navbar.appearance}>
          <View style={styles.navbar.emptyView}></View>
          <Text style={[styles.navbar.title,componentStyles.titleItalic]}>iTunesBrowser</Text>
          <Text style={styles.navbar.button}>Search</Text>
        </View>
        <View style={styles.global.content}>
          <Text>
            jhg jhgjkhg kj gjhgj kghjg jkg kjg  hhahahahaha.
          </Text>
        </View>
      </View>
    );
  }
}



import styles  from './styles';
var componentStyles = StyleSheet.create({
  titleItalic: {
    fontStyle: 'italic'
  }
})

AppRegistry.registerComponent('iTunesBrowser', () => iTunesBrowser);
