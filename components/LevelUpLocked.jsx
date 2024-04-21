import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TouchableHighlight, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export default function LevelUpLocked() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={{ backgroundColor: '#F5F5F5', width: '100%', height: '100%' }}>
      <View style={{ backgroundColor: 'white', alignItems: 'center', marginLeft: 40, marginTop: 15, width: '80%', borderRadius: 10, padding: 20 }}>
        <Image source={require('../assets/hot9.png')} style={{ width: 300, height: 280, margin: 5, borderRadius: 10, borderWidth: 1 }} />
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 20, marginBottom: 5 }}>Нужно больше </Text>
          <Icon name='coins' size={50} color='gold'></Icon>
          <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 5 }}> для открытия!</Text>
        </View>
      </View>

      
      <TouchableHighlight underlayColor='transpose'
        style={{ width: '60%', height: '10%', marginLeft: 80, marginTop: 20, backgroundColor: '#7CFC00', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
        onPress={handleBackPress}
      >
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700'}}>Вернуться к списку достижений</Text>
      </TouchableHighlight>
    </View>
  );
}
