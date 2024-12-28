import dayjs from 'dayjs';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import racesResponse from '../../assets/data/races.json';
import RaceListItem from '../Components/RaceListItem';

const races = racesResponse.data.races.response;

export default function HomeScreen() {


  const sortedRaces = races.sort((r1, r2) =>
    dayjs(r2.date).diff(dayjs(r1.date))
  );

  return (
    <View style={styles.container}>

       <Link href={'/about'}>about</Link>
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
});
