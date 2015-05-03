'use strict';

var React = require('react-native');

var {
  Image,
  ListView,
  Text,
  View,
} = React;

var styles = require('./style');
var api = require('../../data');
var GameCell = require('./Elements/GamesCell');
var VideoView = require('../Video');

var createGamesView = function(gamesType) {
  var fetchGames;

  switch (gamesType) {
    case 'gameHighlights': 
      fetchGames = api.getGameHighlights; break;
    case 'top10': 
      fetchGames = api.getTop10; break;
    case 'daily-zap': 
      fetchGames = api.getDailyZap; break;
    default:
      fetchGames = api.getGameHighlights;
  }

  return React.createClass({
    getInitialState: function() {
      return {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        loaded: false,
      }
    },
    componentDidMount: function() {
      this.fetchData();
    },
    fetchData: function() {
      fetchGames()
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData),
            loaded: true
          });
        })
        .done();
    },
    render: function() {
      if (!this.state.loaded) {
        return this.renderLoading();
      }

      return this.renderListView();
    },

    renderLoading: function() {
      return (
        <View style={styles.loading}>
          <Text>
            Loading games...
          </Text>
        </View>
      );
    },

    renderListView: function() {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderGame}
          style={styles.listView} />
      );
    },

    renderGame: function(game) {
      return (
        <GameCell 
          onSelect={() => this.selectPost(game)}
          game={game} />
      );
    },

    selectPost: function(game) {
      this.props.navigator.push({
        title: game.title,
        component: VideoView,
        passProps: {
          url: game.url
        }
      });
    }
  });
};

module.exports = createGamesView;
