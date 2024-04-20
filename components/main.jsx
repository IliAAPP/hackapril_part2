import React from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FooterComponent from './Footer';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Main() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{backgroundColor: '#DCDCDC'}}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 5}}>
              <TextInput placeholder="Поиск..." style={{ height: 50, width: 300}} />

              <TouchableHighlight underlayColor="transparent" onPress={() => navigation.navigate('Profile')}> 
                <Image source={require('../assets/icon.png')} style={styles.profileIcon} />
              </TouchableHighlight>
          </View>

          <View style={{paddingVertical: 5, paddingHorizontal: 15, backgroundColor: 'white', marginTop: 20, borderWidth: 2, borderRadius: 9, marginLeft: 30, width: '80%', flexDirection: 'row', margin: 15 }}>
              <Image
              source={require('../assets/sun_cloud.jpg')}
              style={{ width: 90, height: 80, resizeMode: 'contain' }}
              />
              <View>
                  <Text style={styles.location}>Сегодня</Text>
                  <Text style={styles.temperature}>16°C</Text>
                  <Text style={styles.description}>Ощущается как +13°C</Text>
              </View>
          </View>

          <TouchableHighlight underlayColor="transparent" onPress={() => Linking.openURL('https://t.me/Testik2101_bot')}>
            <Image source={require('../assets/touch_but.png')} style={{width: 300, height: 70, marginTop: 20, marginLeft: 45, borderRadius: 10}} />
          </TouchableHighlight>


          <View>
              <Text style={{fontSize: 20, fontWeight: '500', marginTop: 20, marginLeft: 15}}>Интересные события</Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'space-around',  flexDirection: 'row', marginTop: 20 }}>
              <Image source={require('../assets/logo1.png')} style={{ width: 100, height: 100 }} />
              
              <Image source={require('../assets/logo2.png')} style={{ width: 100, height: 100 }} />
              
              <Image source={require('../assets/logo3.png')} style={{ width: 100, height: 100 }} />
              
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
              <Text style={{fontSize: 14, fontWeight: '600', left: -17}} >Парусная регата</Text>
              <Text style={{fontSize: 14, fontWeight: '600', left: -30}} >Iron Star</Text>
              <Text style={{fontSize: 14, fontWeight: '600', left: -10}} >Афиша</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems: 'center', marginBottom: 20, marginTop: 20}}>
              <Image source={require('../assets/place1.png')} style={{ width: 200, height: 200, marginTop: 20, marginBottom: 15, borderRadius: 10 }} />
              <Image source={require('../assets/place2.png')} style={{ width: 200, height: 200, marginTop: 20, marginBottom: 15, borderRadius: 10}} />
              
          </View>
          <View>
            <Image source={require('../assets/arenda.png')} style={{ width: '80%', height: 200, marginBottom: 15, borderRadius: 10, marginLeft: 30 }} />
          </View>

          
            <View>
            <SafeAreaView >
              <View /> 
              <View style={styles.footer}>
                <View style={styles.iconContainer}>
                  <Icon name="home-outline" size={30} color="#000" />
                  <Text style={styles.iconText}>Главная</Text>
                </View>
                <TouchableHighlight underlayColor="transparent"  onPress={() => navigation.navigate('Bonus')}>
                  <View style={styles.iconContainer}>
                    <Icon name="star-outline" size={30} color="#000" />
                    <Text style={styles.iconText}>Лояльность</Text>
                  </View>
                </TouchableHighlight>
                <View style={styles.iconContainer}>
                  <Icon name="bell-outline" size={30} color="#000" />
                  <Text style={styles.iconText}>Уведомления</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Icon name="heart-outline" size={30} color="#000" />
                  <Text style={styles.iconText}>Избранное</Text>
                </View>
              </View>
            </SafeAreaView>
            </View>
          
          

      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
        width: '80%',

      },
      buttonImage: {
        width: 100,
        height: 30,
        marginRight: 10,
        zIndex: 1
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        zIndex: 2
      },
    profileIcon: {
      marginLeft: 30,
      width: 50,
      height: 50,
    },

    location: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      temperature: {
        fontSize: 32,
        fontWeight: 'bold',
      },
      description: {
        fontSize: 16,
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 80,
        borderTopWidth: 1,
        borderTopColor: '#eaeaea',
      },
      iconContainer: {
        alignItems: 'center',
      },
      iconText: {
        marginTop: 5,
        fontSize: 12,
      },
  });
  