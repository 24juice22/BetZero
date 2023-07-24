import React, { useState, useEffect } from 'react';
import dummyData from '../data/dummyData';
import Box from '../components/Box/Box';

const Mlb = () => {
  // const [baseball, setBaseball] = useState(null);

  const baseball = dummyData;
  // useEffect(() => {
  //   fetch('/api/mlb')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setBaseball(data);
  //     });
  // }, []);

  if (baseball)
    return (
      <div className='page--mlb'>
        {baseball.length === 0 ? (
          <p>There are currently no MLB odds</p>
        ) : (
          baseball.map((matchup) => <Box key={matchup.id} matchup={matchup} />)
        )}
      </div>
    );
};

export default Mlb;
