import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';
import Pesquisa from './src/screens/Pesquisa';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
