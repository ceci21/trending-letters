export const removeLetter = (letter, collection) => {
  // Find index where letter is
  let index = null;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === letter) {
      index = i;
      break;
    }
  }

  // Build new array where letter is removed
  const newCollection = [];
  for (let i = 0; i < collection.length; i++) {
    if (i !== index) {
      newCollection.push(collection[i]);
    }
  }
  return newCollection;
};

export const embedTrendViewer = (keywords, callback) => {

  const queries = [];

  keywords.forEach((keyword) => {
    queries.push(
      { keyword, geo: 'US', time: 'today 12-m' }
    );
  })

  const data = {
    comparisonItem: queries,
    category: 0,
    property: ''
  };

  const trendViewer = document.getElementsByClassName('trend-graph')[0];

  const args = [
    trendViewer,
    'TIMESERIES',
    data,
    {
      exploreQuery: 'q=a&geo=US&date=today 12-m',
      guestPath: 'https://trends.google.com:443/trends/embed/'
    }
  ];

  if (trendViewer) {
    trendViewer.innerHTML = '';
    window.trends.embed.renderExploreWidgetTo(...args);
    if (callback) {
      callback('done adding iframe to dom');
    }
  }
};
