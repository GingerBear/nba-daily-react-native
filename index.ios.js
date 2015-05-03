'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var gamesView = require('./App/Views/Games');

var nbaDaily = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'NBA Daily - Game Highlights',
          component: gamesView('gameHighlights'),
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('nbaDailyReactNative', () => nbaDaily);
