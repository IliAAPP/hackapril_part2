import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FooterComponent from './Footer';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import AllAchivements from './AllAchivements';
import AllTours from './AllTours'
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProgressBar = ({ level, current, goal }) => {
    const progressWidth = (current / goal) * 100 + '%';
    return (
      <View style={styles.progressBarContainer}>
        <Text style={styles.levelTextShadow}>Уровень: {level}</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: progressWidth }]} />
        </View>
        <Text style={styles.progressTextBlue}>{current}/{goal}</Text>
      </View>
    );
  };
  
  const Card = () => {
    const navigation = useNavigation();
   return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <ImageBackground source={require('../assets/green_background.jpg')} style={[styles.background, { resizeMode: 'cover' }]} >
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.cardTitle}>a</Text>
            <Text style={styles.cardContent}>Показать карту</Text>
          </View>
          <Image source={require('../assets/qrcode.png')} style={{ width: 110, height: 110 }} />
        </View>
  
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <View style={styles.rectangle}>
            <Text style={styles.rectangleTitle}>Бонусы</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.rectangleContent}>1 234</Text>
              <Icon name='coins' style={{ width: 20, height: 20, marginTop: 6 }} />
            </View>
          </View>
  
          <View style={styles.rectangle}>
            <Text style={styles.rectangleTitle}>Начисления за покупки</Text>
            <Text style={styles.rectangleContent}>3,3%</Text>
          </View>
  
          <View style={styles.rectangle}>
            <Text style={styles.rectangleTitle}>Персональная скидка</Text>
            <Text style={styles.rectangleContent}>12,7%</Text>
          </View>
        </View>
        <ProgressBar level={13} current={1700} goal={2000} />
  
        <View style={{ backgroundColor: 'white', width: '80%', marginLeft: 35, marginTop: 15, borderRadius: 10 }}>
          <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: '700' }}>Достижения</Text>
              <View style={{ borderRadius: 10, borderBlockColor: 'purple', borderWidth: 2, padding: 5, borderRadius: 7 }}>
                <TouchableHighlight underlayColor='transparent' onPress={() => navigation.navigate('AllAchivements')}>
                  <Text style={{ color: 'purple', fontWeight: '600' }}>Смотреть все</Text>
                </TouchableHighlight>
              </View>
            </View>
  
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15, }}>
              <Image source={require('../assets/ach1.png')} style={{ width: 80, height: 95 }} />
              <Image source={require('../assets/ach2.png')} style={{ width: 80, height: 95 }} />
              <Image source={require('../assets/ach3.png')} style={{ width: 80, height: 95 }} />
            </View>


          </View>
        </View>

        <View>
          

        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <Text style={{color: 'red', fontWeight: '700', fontSize: 18, backgroundColor: 'white', padding: 10, borderRadius: 10, marginLeft: 3}}>Только сейчас - за баллы</Text>
            <TouchableHighlight underlayColor='transparent' onPress={() => navigation.navigate('AllTours')}>
              <Text style={{color: 'purple', fontWeight: '700', fontSize: 16, backgroundColor: 'white', padding: 10, borderRadius: 10, marginRight: 3}}>Смотреть все</Text>
            </TouchableHighlight>

        </View>

        <View style={{flexDirection: 'column', justifyContent: 'space-around', marginTop: 20, alignItems: 'center' }}>
            <Image source={require('../assets/zad1.png')} style={{ width: 210, height: 190, borderWidth: 5,borderRadius:7, marginTop: 10 }} />
            <Image source={require('../assets/zad2.png')} style={{ width: 210, height: 190, borderWidth: 5,borderRadius:7, marginTop: 10  }} />
            <Image source={require('../assets/zad3.png')} style={{ width: 210, height: 190, borderWidth: 5,borderRadius:7, marginTop: 10, marginBottom: 20 }} />
        </View>

            </View>

            <SafeAreaView >
      <View /> 
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Icon2 name="home-outline" size={30} color="#000" />
          <Text style={styles.iconText}>Главная</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon2 name="star-outline" size={30} color="orange" />  
          <Text style={styles.iconText}>Лояльность</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon2 name="bell-outline" size={30} color="#000" />
          <Text style={styles.iconText}>Уведомления</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon2 name="heart-outline" size={30} color="#000" />
          <Text style={styles.iconText}>Избранное</Text>
        </View>
      </View>
    </SafeAreaView>
      </ImageBackground>
    </ScrollView>
   );
  };

const styles = StyleSheet.create({
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
  background: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    backgroundColor: 'purple',
    borderRadius: 8,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
    marginTop: 10,
    width: '65%',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 200,
    width: 350,
    marginLeft: 30,
  },
  cardTitle: {
    fontSize: 32,
    color: 'white',
    fontWeight: '600',
    marginBottom: 50
  },
  cardContent: {
    fontSize: 14,
    color: 'white',
  },
  
  rectangle: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    borderWidth: 2
  },
  
  rectangleTitle: {
    fontSize: 11,
    color: 'black',
    marginBottom: 5
  },

   rectangleContent: {
     fontSize:18,
     color:'green',
     marginRight: 7
     // Добавьте другие стили, как необходимо
   },
   progressBarContainer: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    width: '80%', // Задайте нужную ширину
    alignSelf: 'center', // Центрирование
    marginTop: 20, // Отступ сверху
    backgroundColor: 'rgba(0,0,0,0)',
  },
  levelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: '#1E90FF',
    borderRadius: 10,
    marginTop: 5,
    overflow: 'hidden',
    
  },
  progress: {
    height: '100%',
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  progressText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,},
    levelTextShadow: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E90FF',
        fontWeight: '800'
      },
      progressTextBlue: {
        fontSize: 14,
        color: 'blue', // Изменен цвет на синий
        marginTop: 5,
        fontWeight: '700'
      },
});


export default Card;
