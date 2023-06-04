import React, { useState, useEffect } from 'react';

const Mlb = () => {
  const [baseball, setBaseball] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d'
    )
      .then((res) => res.json())
      .then((data) => {
        setBaseball(data);
        console.log(data);
      });
  }, []);

  if (baseball)
    return (
      <div className='page--mlb'>
        {baseball.length === 0 ? (
          <p>There are currently no MLB odds</p>
        ) : (
          baseball.map((matchup) => (
            <div
              key={matchup.id}
            >{`${matchup.away_team} @ ${matchup.home_team}`}</div>
          ))
        )}
      </div>
    );
};

export default Mlb;
