import { gql, useQuery } from '@apollo/client';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

const query = gql`
  query MyQuery($id: Int) {
    races(id: $id) {
      response {
        id
        date
        season
        circuit {
          id
          image
          name
        }
        competition {
          name
          location {
            country
          }
        }
      }
    }
  }
`;

const RaceDetails = () => {

  const { id } = useLocalSearchParams();
  const { data, loading } = useQuery(query, { variables: { id: id } });
  
  if (loading) {
    return <ActivityIndicator />;
  }

  const race = data.races.response[0];

  if (!race) {
    return <Text>Race not found!</Text>;
  }

  return (
    <View style={styles.page}>
      <Text style={styles.circuitSeason}>
        <Text style={styles.circuitName}>{race.competition.location.country} </Text>
        {race.season}
      </Text>
      <Text>RaceDetails:{race.circuit.name}</Text>

      <Image
        source={{ uri: race.circuit.image }}
        style={styles.image}
        resizeMode='contain'
      />

    </View>
  );
};

const styles = StyleSheet.create({
  circuitName: {
    fontSize: 24,
    fontFamily: 'F1-Bold'
  },
  circuitSeason: {
    fontSize: 24,
    fontFamily: 'F1-Regular'
  },
  page: {
    padding: 10,

  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginVertical: 15,
  }
});

export default RaceDetails