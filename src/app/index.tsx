import { gql, useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import RaceListItem from '../Components/RaceListItem';
import { Picker } from '@react-native-picker/picker'; // Asegúrate de instalar esta librería si no la tienes
import { useState } from 'react';


// const races = racesResponse.data.races.response;
const query = gql`
  query MyQuery($season: String, $type: String) {
    races(season: $season, type: $type){
      response{
        id
        date
        season
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


export default function HomeScreen() {
  const currentYear = new Date().getFullYear();
  const [selectedSeason, setSelectedSeason] = useState(currentYear.toString());

  const seasonOptions = Array.from(
    { length: 14 },
    (_, index) => (currentYear - index).toString()
  );

  const { data, loading, error } = useQuery(query, {
    variables: { season: selectedSeason, type: 'Race' },
  });

  if (loading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>Error Fetching races: {error.message}</Text>
  }

  const races = [...data.races.response];

  const sortedRaces = races.sort((r1, r2) =>
    dayjs(r2.date).diff(dayjs(r1.date))
  );

  return (

    <View style={styles.container}>

      <Picker
        selectedValue={selectedSeason}
        onValueChange={(itemValue) => setSelectedSeason(itemValue)} // Actualiza el estado
        style={styles.picker}
      >
        {seasonOptions.map((season) => (
          <Picker.Item key={season} label={season} value={season} />
        ))}
      </Picker>

      <FlatList
        data={sortedRaces}
        renderItem={({ item, index }) => <RaceListItem item={item} round={sortedRaces.length - index} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke'
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 10,
  },
});
