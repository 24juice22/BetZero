import React, { useState } from 'react';
import Lines from './Lines';
import { useSelector } from 'react-redux';

const BoxTeam = ({ team, teamType, totalTeam, matchup }) => {
  const { betbarActive } = useSelector((state) => state);
  const [bettingLines, setBettingLines] = useState(allNewLines());

  const handleLineClick = (id) => {
    setBettingLines((oldLines) =>
      oldLines.map((line) => {
        return line.id === id ? { ...line, isClicked: !line.isClicked } : line;
      })
    );
  };

  function allNewLines() {
    let betID = betbarActive.betList.map((item) => item.id);
    const newLines = [
      {
        index: 0,
        indexType: 'h2h',
        team: team,
        teamType: teamType,
        matchupInfo: `${matchup.awayTeam} @ ${matchup.homeTeam}`,
        isClicked: false,
        id: `${matchup.id}-h2h-${team}`,
      },
      {
        index: 1,
        indexType: 'spread',
        team: team,
        teamType: teamType,
        matchupInfo: `${matchup.awayTeam} @ ${matchup.homeTeam}`,
        isClicked: false,
        id: `${matchup.id}-spread-${team}`,
      },
      {
        index: 2,
        indexType: 'totals',
        team: team,
        teamType: teamType,
        matchupInfo: `${matchup.awayTeam} @ ${matchup.homeTeam}`,
        isClicked: false,
        id: `${matchup.id}-totals-${team}`,
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
      isClicked={line.isClicked}
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
