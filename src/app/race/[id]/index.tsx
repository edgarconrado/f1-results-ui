import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import raceReponse from '../../../../assets/data/race.json';

const race = raceReponse.data.races.response[0];

const RaceDetails = () => {

  const { id } = useLocalSearchParams();

  return (
    <View style={ styles.page }>
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