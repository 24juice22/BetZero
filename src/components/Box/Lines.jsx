import React from 'react';

const Lines = ({
  index,
  lineClicked,
  isClicked,
  team,
  teamType,
  id,
  indexType,
  matchupInfo,
  matchup,
}) => {
  let point = '';
  if (indexType === 'spread' || indexType === 'totals') {
    point = matchup.markets[index][teamType].point;
  }
  let price = matchup.markets[index][teamType].price;

  return (
    <div
      className='line'
      onClick={() =>
        lineClicked(id, point, price, team, indexType, matchupInfo, matchup)
      }
    >
      {point !== '' && <p className='line__point'>{point}</p>}
      <p className='price line__price'>{price}</p>
    </div>
  );
};

export default Lines;
