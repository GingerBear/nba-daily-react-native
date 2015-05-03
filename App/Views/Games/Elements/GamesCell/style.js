'use strict';

var React = require('react-native');

var {
  StyleSheet
} = React;

module.exports = StyleSheet.create({
  rowRight: {
    flex: 1,
    marginLeft: 10
  },
  title: {
    fontSize: 15
  },
  date: {
    fontSize: 13,
    color: '#aaa'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 5
  },
  thumbnail: {
    width: 80,
    height: 80
  },
});