import { GestureHandlerRootView} from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/main';
import Bonus from './components/Bonus';
import AllAchivements from './components/AllAchivements';
import AllTours from './components/AllTours';
import Profile from './components/Profile'
import Arenda from './components/Arenda';
import LevelUpLocked from './components/LevelUpLocked';
import SdachaJilya from './components/SdachaJilya';
import HistoryBonuses from './components/HistoryBonuses';
import Nachislenia from './components/Nachislenia';
import DannieProfilya from './components/DannieProfilya';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Bonus" component={Bonus} />
        <Stack.Screen name="AllAchivements" component={AllAchivements} />
        <Stack.Screen name="AllTours" component={AllTours} />
        <Stack.Screen name="Arenda" component={Arenda} />
        <Stack.Screen name="LevelUpLocked" component={LevelUpLocked} />
        <Stack.Screen name="SdachaJilya" component={SdachaJilya} />
        <Stack.Screen name="HistoryBonuses" component={HistoryBonuses} />
        <Stack.Screen name="Nachislenia" component={Nachislenia} />
        <Stack.Screen name="DannieProfilya" component={DannieProfilya} />

      </Stack.Navigator>
    </NavigationContainer>





  );
}

export default App;

