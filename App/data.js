function fetchXhr(url) {
  return fetch(url, {
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    }
  });
};

function getGameHighlights() {
  return fetchXhr('http://nba-daily.herokuapp.com');
}

function getTop10() {
  return fetchXhr('http://nba-daily.herokuapp.com/top10');
}

function getDailyZap(url) {
  return fetchXhr('http://nba-daily.herokuapp.com/daily-zap');
}


function getStandings(url) {
  return fetchXhr('http://nba-daily.herokuapp.com/standings');
}

function getVideo(url) {
  return fetchXhr('http://nba-daily.herokuapp.com' + url);
}

module.exports = {
  fetchXhr: fetchXhr,
  getGameHighlights: getGameHighlights,
  getTop10: getTop10,
  getDailyZap: getDailyZap,
  getStandings: getStandings,
  getVideo: getVideo,
}