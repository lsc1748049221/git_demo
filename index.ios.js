/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var my = '老虎没打着!';


var you = '罚你妹';

var test = "123";
var haha = "321";
var nx = '精神点';
var xn = '非常精神';

var Main = require("./component/Main");
export default class DouBanDemo extends Component {
  render() {
    return (
      <Main/>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('DouBanDemo', () => DouBanDemo);
