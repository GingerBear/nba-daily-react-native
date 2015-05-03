'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  View,
  TouchableHighlight
} = React;

var styles = require('./style');

module.exports = React.createClass({
  render: function() {
      return (
        <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.container}>
          <Image 
            source={{uri: this.props.game.metadata.media.thumbnail.url}}
            style={styles.thumbnail} />
          <View style={styles.rowRight}>
            <Text style={styles.title}>{this.props.game.title}</Text>
            <Text style={styles.date}>{this.props.game.date}</Text>
          </View>
        </View>
        </TouchableHighlight>
      );
    }
});