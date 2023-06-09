import React from 'react';
import './Box.scss';
import BoxTeam from './BoxTeam';

const Box = ({ matchup }) => {
  return (
    <div className='box'>
      <div className='container--widest'>
        <BoxTeam team={matchup.awayTeam} />
        <p className='box__at-symbol'>@--</p>
        <BoxTeam team={matchup.homeTeam} />
      </div>
    </div>
  );
};

export default Box;
