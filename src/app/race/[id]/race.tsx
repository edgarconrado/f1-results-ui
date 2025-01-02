import { gql, useQuery } from '@apollo/client';
import { useGlobalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import RankingListitem from '../../../Components/RankingListItem';


const query = gql`
  query MyQuery($id: String) {
    raceRankings(race: $id) {
      response {
        position
        time
        team {
          id
          name
        }
        driver {
          id
          image
          name
        }
      }
    }
  }
`;

const race = () => {

  const { id } = useGlobalSearchParams();
  const { data, loading } = useQuery(query, { variables: { id: String(id) } });

  if (loading) {
    return <ActivityIndicator />;
  }

  const raceRankings = data?.raceRankings.response;

  if (!raceRankings) {
    return <Text>Race not found!</Text>;
  }

  return (
    <View>
      <FlatList
        data={raceRankings}
        renderItem={({ item }) => <RankingListitem item={item} />}
      />
    </View>
  )
}

export default race