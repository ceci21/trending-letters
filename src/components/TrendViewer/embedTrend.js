import 'https://ssl.gstatic.com/trends_nrtr/1457_RC03/embed_loader.js';

trends.embed.renderExploreWidget(
  'TIMESERIES',
  {
    comparisonItem: [{ keyword: 'a', geo: 'US', time: 'today 12-m' }],
    category: 0,
    property: ''
  },
  {
    exploreQuery: 'q=a&geo=US&date=today 12-m',
    guestPath: 'https://trends.google.com:443/trends/embed/'
  }
);
