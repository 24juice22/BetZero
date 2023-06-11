import React from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../../redux/betbarActive';
import GameDate from '../GameDate';
import './Slip.scss';

const Slip = ({ matchup }) => {
  const dispatch = useDispatch();

  const payload = {
    id: matchup.id,
  };

  return (
    <div className='box slip'>
      <button
        className='btn btn--exit slip__btn--exit'
        onClick={() => dispatch(update(payload))}
      >
        X
      </button>
      <div className='container--wide'>
        <div className='slip__line-numbers'>
          <p className='slip__point'>
            {matchup.team} {matchup.point}
          </p>
          <p className='slip__price'>{matchup.price}</p>
        </div>
        <p className='slip__line-type'>{matchup.indexType}</p>
        <div className='slip__matchup-info'>
          <p className='slip__matchup'>{matchup.matchupInfo}</p>
          <GameDate matchup={matchup.betDate} />
        </div>
        {/* <SlipForm price={matchup.price} id={matchup.id} /> */}
      </div>
    </div>
  );
};

export default Slip;
