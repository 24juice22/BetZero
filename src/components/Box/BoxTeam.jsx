import React from 'react';

const BoxTeam = ({ team }) => {
  return (
    <div className='box__team'>
      <p className='box__team-name'>{team}</p>
      {/* <div className='box__lines'>{lineElements}</div> */}
    </div>
  );
};

export default BoxTeam;
