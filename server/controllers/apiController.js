const apiController = {};

apiController.getNflData = (req, res, next) => {
  console.log('in apiController NFL');
  fetch(
    'https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d'
  )
    .then((res) => res.json())
    .then((data) => {
      res.locals.data = cleanData(data);
      next();
    });
};

function cleanData(data) {
  let finalData = data.map((item) => {
    let indexSpread = -1;
    let indexTotal = -1;
    let indexMoneyline = -1;
    let betMarkets = [];

    if (item.bookmakers.length !== 0) {
      betMarkets = item.bookmakers[0].markets;
      indexSpread = betMarkets.findIndex((index) => index.key === 'spreads');
      indexTotal = betMarkets.findIndex((index) => index.key === 'totals');
      indexMoneyline = betMarkets.findIndex((index) => index.key === 'h2h');
    }

    let indexOutcome = (index, team) => {
      return betMarkets[index].outcomes.findIndex((item) => item.name === team);
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
            price:
              indexMoneyline === -1
                ? ''
                : betMarkets[indexMoneyline].outcomes[
                    indexOutcome(indexMoneyline, item.away_team)
                  ].price,
          },
          homeTeam: {
            price:
              indexMoneyline === -1
                ? ''
                : betMarkets[indexMoneyline].outcomes[
                    indexOutcome(indexMoneyline, item.home_team)
                  ].price,
          },
        },
        {
          wagerType: 'spreads',
          awayTeam: {
            price:
              betMarkets[indexSpread].outcomes[
                indexOutcome(indexSpread, item.away_team)
              ].price,
            point:
              betMarkets[indexSpread].outcomes[
                indexOutcome(indexSpread, item.away_team)
              ].point,
          },
          homeTeam: {
            price:
              betMarkets[indexSpread].outcomes[
                indexOutcome(indexSpread, item.home_team)
              ].price,
            point:
              betMarkets[indexSpread].outcomes[
                indexOutcome(indexSpread, item.home_team)
              ].point,
          },
        },
        {
          wagerType: 'totals',
          homeTeam: {
            name: 'Over',
            point:
              indexTotal === -1
                ? ''
                : betMarkets[indexTotal].outcomes[
                    indexOutcome(indexTotal, 'Over')
                  ].point,
            price:
              indexTotal === -1
                ? ''
                : betMarkets[indexTotal].outcomes[
                    indexOutcome(indexTotal, 'Over')
                  ].price,
          },
          awayTeam: {
            name: 'Under',
            point:
              indexTotal === -1
                ? ''
                : betMarkets[indexTotal].outcomes[
                    indexOutcome(indexTotal, 'Under')
                  ].point,
            price:
              indexTotal === -1
                ? ''
                : betMarkets[indexTotal].outcomes[
                    indexOutcome(indexTotal, 'Under')
                  ].price,
          },
        },
      ],
    };
  });
  return finalData;
}

export default apiController;
