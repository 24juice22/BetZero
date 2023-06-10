import React from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../../redux/betbarActive';

const Lines = ({
  index,
  handleLineClick,
  isClicked,
  team,
  teamType,
  id,
  indexType,
  matchupInfo,
  matchup,
}) => {
  //   const { betbarActive } = useSelector((state) => state);
  const dispatch = useDispatch();

  let point = '';
  if (indexType === 'spread' || indexType === 'totals') {
    point = matchup.markets[index][teamType].point;
  }
  let price = matchup.markets[index][teamType].price;

  const payload = {
    id: id,
    point: point,
    price: price,
    team: team,
    indexType: indexType,
    matchupInfo: matchupInfo,
    // betDate: { commence_time: new Date() },
  };

  return (
    <div className='line' onClick={() => dispatch(update(payload))}>
      {point !== '' && <p className='line__point'>{point}</p>}
      <p className='price line__price'>{price}</p>
    </div>
  );
};

export default Lines;
