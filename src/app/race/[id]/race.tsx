import { View, Text, FlatList } from 'react-native'
import React from 'react'
import raceRakingResponse from '../../../../assets/data/race-rankings.json';
import RankingListitem from '../../../Components/RankingListItem';

const raceRanking = raceRakingResponse.data.raceRankings.response;

const race = () => {


  return (
    <View>
      <FlatList
        data={raceRanking}
        renderItem={({item}) => <RankingListitem item={item} />}
      />
    </View>
  )
}

export default race