const apiController = {};

apiController.getData = (req, res, next) => {
  let sport;
  switch (req.url) {
    case '/mlb':
      sport = 'baseball_mlb';
      break;
    case '/nfl':
      sport = 'americanfootball_nfl';
      break;
    case 'nba':
      sport = 'basketball_nba';
      break;
    case 'nhl':
      sport = 'icehockey_nhl';
      break;
    case 'ncaaf':
      sport = 'americanfootball_ncaaf';
      break;
    case 'ncaab':
      sport = 'abasketball_ncaab';
      break;
  }

  fetch(
    `https://api.the-odds-api.com/v4/sports/${sport}/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d`
  )
    .then((res) => res.json())
    .then((data) => {
      res.locals.data = cleanData(data);
      next();
    });
};

// Function to clean api data for front end use
function cleanData(data) {
  const finalData = data.map((item) => {
    // Assign indexes and betMarkets values in case they don't exist
    let indexSpread = -1;
    let indexTotal = -1;
    let indexMoneyline = -1;
    let betMarkets = [];

    // Reassign indexes and betMarkets if they exist
    if (item.bookmakers.length !== 0) {
      betMarkets = item.bookmakers[0].markets;
      indexSpread = betMarkets.findIndex((index) => index.key === 'spreads');
      indexTotal = betMarkets.findIndex((index) => index.key === 'totals');
      indexMoneyline = betMarkets.findIndex((index) => index.key === 'h2h');
    }

    //Find specific team index for each outcome
    let indexOutcome = (index, team) => {
      return betMarkets[index].outcomes.findIndex((item) => item.name === team);
    };

    //Return the final line value if it exists or empty string
    const line = (index, team, priceOrPoint) => {
      return index === -1
        ? ''
        : betMarkets[index].outcomes[indexOutcome(index, team)][priceOrPoint];
    };

    return {
      awayTeam: item.away_team,
      homeTeam: item.home_team,
      id: item.id,
      startTime: item.commence_time,
      markets: [
        {
          wagerType: 'h2h',
          awayTeam: {
            price: line(indexMoneyline, item.away_team, 'price'),
          },
          homeTeam: {
            price: line(indexMoneyline, item.home_team, 'price'),
          },
        },
        {
          wagerType: 'spreads',
          awayTeam: {
            price: line(indexSpread, item.away_team, 'price'),
            point: line(indexSpread, item.away_team, 'point'),
          },
          homeTeam: {
            price: line(indexSpread, item.home_team, 'price'),
            point: line(indexSpread, item.home_team, 'point'),
          },
        },
        {
          wagerType: 'totals',
          homeTeam: {
            name: 'Over',
            point: line(indexTotal, 'Over', 'point'),
            price: line(indexTotal, 'Over', 'price'),
          },
          awayTeam: {
            name: 'Under',
            point: line(indexTotal, 'Under', 'point'),
            price: line(indexTotal, 'Under', 'price'),
          },
        },
      ],
    };
  });
  return finalData;
}

export default apiController;
