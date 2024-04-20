import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/main';
import Bonus from './components/Bonus';
import AllAchivements from './components/AllAchivements';
import AllTours from './components/AllTours';
import Profile from './components/Profile'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Arenda from './components/Arenda';


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
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;

