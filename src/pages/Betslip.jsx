import React from 'react';
import { useSelector } from 'react-redux';
import Slip from '../components/Slip/Slip';
import { useDispatch } from 'react-redux';
import { update } from '../redux/modalVisible';

const Betslip = () => {
  const { betbarActive } = useSelector((state) => state);
  const dispatch = useDispatch();
  const betList = betbarActive.betList;

  console.log('line 9 betslip:', betList);
  const slipElements = betList.map((matchup) => (
    <Slip key={matchup.id} matchup={matchup} />
  ));

  return (
    <div className='page betslip'>
      <h1 className='title title--page'>Betslip</h1>
      {!betList.length && (
        <p className='betslip__message'>
          The betslip is empty! Please add selections to make a bet.
        </p>
      )}
      {!betList.length && <h3 className='betslip__logo'>CAM</h3>}
      {slipElements}
      {betList.length > 0 && (
        <button className='btn betslip__button'>Login to Bet</button>
      )}
      {betList.length > 0 && (
        <button
          className='btn betslip__button'
          onClick={() => dispatch(update(true))}
        >
          Bet
        </button>
      )}
    </div>
  );
};

export default Betslip;
