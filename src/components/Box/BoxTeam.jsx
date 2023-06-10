import React, { useState } from 'react';
import Lines from './Lines';

const BoxTeam = ({
  team,
  teamType,
  totalTeam,
  id,
  awayTeam,
  homeTeam,
  matchup,
}) => {
  const [bettingLines, setBettingLines] = useState(allNewLines());

  const handleLineClick = (id) => {
    console.log(id);
  };

  function allNewLines() {
    // let betID = betbarActive.map((item) => item.id);
    const newLines = [
      {
        index: 0,
        indexType: 'h2h',
        team: team,
        teamType: teamType,
        matchupInfo: `${awayTeam} @ ${homeTeam}`,
        // isClicked: betID.includes(`moneyline-${team}`) ? true : false,
        id: `{${id}}-${team}`,
      },
      {
        index: 1,
        indexType: 'spread',
        team: team,
        teamType: teamType,
        matchupInfo: `${awayTeam} @ ${homeTeam}`,
        // isClicked: betID.includes(`spread-${team}`) ? true : false,
        id: `spread-${team}`,
      },
      {
        index: 2,
        indexType: 'totals',
        team: team,
        teamType: teamType,
        matchupInfo: `${awayTeam} @ ${homeTeam}`,
        // isClicked: betID.includes(`total-${team}`) ? true : false,
        id: `${id}-${team}`,
      },
    ];
    return newLines;
  }

  const lineElements = bettingLines.map((line) => (
    <Lines
      key={line.id}
      index={line.index}
      team={line.team}
      teamType={line.teamType}
      matchupInfo={line.matchupInfo}
      id={line.id}
      handleLineClick={handleLineClick}
      indexType={line.indexType}
      matchup={matchup}
    />
  ));

  return (
    <div className='box__team'>
      <p className='box__team-name'>{team}</p>
      <div className='box__lines'>{lineElements}</div>
    </div>
  );
};

export default BoxTeam;
