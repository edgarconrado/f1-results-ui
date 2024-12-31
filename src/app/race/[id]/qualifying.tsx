import React from 'react';
import { FlatList, View } from 'react-native';
import raceRakingResponse from '../../../../assets/data/race-rankings.json';
import RankingListitem from '../../../Components/RankingListItem';

const raceRanking = raceRakingResponse.data.raceRankings.response;

const QualifyingScreen = () => {
  return (
    <FlatList
      data={raceRanking}
        renderItem={({item}) => <RankingListitem item={item} />}      
    />
  );
};

export default QualifyingScreen