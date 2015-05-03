'use strict';

var React = require('react-native');

var {
  Text,
  Image,
  View
} = React;

var api = require('../../data');
var styles = require('./style');
var Video = require('react-native-video');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      video: null
    }
  },

  componentDidMount: function() {
    api.getVideo(this.props.url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          video: responseData
        });
      })
      .done();
  },

  render: function() {
    if (!this.state.video) {
      return (
        <View style={styles.loading}>
          <Text>
            Loading Video...
          </Text>
        </View>
      );
    }
    return this.renderVideo();
  },
  renderVideo: function() {
    return (
      <View style={styles.container}>
        <Text>{this.state.video.title}</Text>
        <Text>{this.state.video.description}</Text>
        <Video
          source={{uri: this.state.video.video}}
          style={styles.video} />
      </View>
    );
  }
});