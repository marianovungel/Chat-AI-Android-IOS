import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Home from './src/screens/Home';
import Pesquisa from './src/screens/Pesquisa';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Home />
      <Pesquisa />
    </View>
  );
}
