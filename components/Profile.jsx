import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const UserProfile = () => {
  const navigation = useNavigation();

  const menuItems = [
    { title: 'Данные профиля', onPress: () => {navigation.navigate('DannieProfilya')}  },
    { title: 'Пуш-уведомления' },
    { title: 'Покупки и бронирование' },
    { title: 'Сдача жилья', onPress: () => {navigation.navigate('SdachaJilya')} },
    { title: 'Поддержка' },
    { title: 'Контакты', isHeader: true },
    { title: 'О приложении' },
    { title: 'Пользовательское соглашение' },
    { title: 'Политика конфиденциальности' },
    { title: 'Выйти', isRedText: true },
  ];

  return (
    <View>
      <View style={{ backgroundColor: '#484AA0' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: '600' }}>Профиль</Text>
          <Icon name='cancel' size={30} color='white' />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
          <Image source={require('../assets/icon.png')} style={{ width: 100, height: 100, marginRight: 15 }} />
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Илья Апполонов</Text>
            <Text style={{ color: 'white' }}>+7 (999) 999-99-99</Text>
          </View>
        </View>
      </View>

      <View style={{ paddingVertical: 10, fontWeight: '600' }}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={{ paddingVertical: 15, marginLeft: 20 }}>
            {item.title === 'Сдача жилья' ? ( 

              <View style={{ flexDirection: 'row', fontWeight: '600', alignItems: 'center' }}>
                <Icon2 name='right' style={{ marginRight: 5 }} />
                <Text style={{ color: item.isRedText ? 'red' : 'black', fontWeight: item.isHeader ? 'bold' : 'normal',  textDecorationLine: 'underline'}} onPress={item.onPress}>
                  {item.title}
                </Text>
              </View>
            ) : item.title === 'Данные профиля' ? (


              <View style={{ flexDirection: 'row', fontWeight: '600', alignItems: 'center' }}>
              <Icon2 name='right' style={{ marginRight: 5 }} />
              <Text style={{ color: item.isRedText ? 'red' : 'black', fontWeight: item.isHeader ? 'bold' : 'normal', textDecorationLine: 'underline' }} onPress={item.onPress}>
                {item.title}
              </Text>
              </View>
            ) : (
              <View style={{ flexDirection: 'row', fontWeight: '600', alignItems: 'center' }}>
                <Icon2 name='right' style={{ marginRight: 5 }} />
                <Text style={{ color: item.isRedText ? 'red' : 'black', fontWeight: item.isHeader ? 'bold' : 'normal',  }}>
                  {item.title}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  phone: {
    fontSize: 18,
    color: 'gray',
    marginTop: 5,
  },
  options: {
    marginTop: 30,
  },
  option: {
    fontSize: 18,
    color: '#000',
    marginTop: 10,
  },
  profileIcon: {
    width: 100,
    height: 100,
    marginTop: 200,
  },
});

export default UserProfile;
