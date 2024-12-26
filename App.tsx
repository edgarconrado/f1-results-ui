import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import racesResponse from './assets/data/races.json';
import RaceListItem from './src/Components/RaceListItem';

const races = racesResponse.data.races.response;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={races}
        renderItem={({ item }) => <RaceListItem item={item} />}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke'
  },
});
