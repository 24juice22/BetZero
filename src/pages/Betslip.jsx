import React from 'react';
import { useSelector } from 'react-redux';
import Slip from '../components/Slip/Slip';

const Betslip = () => {
  const { betbarActive } = useSelector((state) => state);
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
      {/* {betList.length && (
        <button className='btn betslip__button'>Login to Bet</button>
      )} */}
      {betbarActive.length && (
        <button className='btn betslip__button'>Bet</button>
      )}
      <button className='btn betslip__button'>Bet</button>
    </div>
  );
};

export default Betslip;
