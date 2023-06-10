import React from 'react';
import './Box.scss';
import BoxTeam from './BoxTeam';
import GameDate from './GameDate';

const Box = ({ matchup }) => {
  return (
    <div className='box'>
      <div className='container--widest'>
        <BoxTeam
          team={matchup.awayTeam}
          teamType={'awayTeam'}
          totalTeam={'Over'}
          matchup={matchup}
        />
        <p className='box__at-symbol'>@--</p>
        <BoxTeam
          team={matchup.homeTeam}
          teamType={'homeTeam'}
          totalTeam={'Under'}
          matchup={matchup}
        />
        <GameDate startTime={matchup.startTime} />
      </div>
    </div>
  );
};

export default Box;
