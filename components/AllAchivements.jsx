import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react'; // Импортируем React и useState
import { ScrollView } from 'react-native-gesture-handler';

export default function AllAchivements() {
  const [showResult, setShowResult] = useState(false); // Добавляем состояние showResult

  const handlePress = () => {
    setShowResult(!showResult); // Показываем результат при нажатии
  };

  return (
    <ScrollView>
      <View style={{ position: 'relative' }}> 
          <ImageBackground source={require('../assets/green_background.jpg')} style={[styles.background, { resizeMode: 'cover' }]} >
              <View style={{marginTop: 35, marginLeft: 50, flexDirection: 'row'}}>
                  <Icon name='caret-back-circle-outline' size={30} color='green' style={{marginRight: 25}} />

                  <Text style={{
                      fontSize: 24,
                      color: 'green',
                      fontWeight: '600',
                      marginBottom: 10,
                      textShadowColor: 'rgba(0, 0, 0, 0.6)',
                      textShadowOffset: {width: -1, height: 1},
                      textShadowRadius: 10,
                      
                      }}>
                      Достижения
                  </Text>

              </View>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '90%', justifyContent: 'center', backgroundColor: 'white', marginLeft: 20, padding: 10, borderRadius: 10, borderWidth: 1, marginTop: 10}}>
                  <Image source={require('../assets/ach10.png')} style={{ width: 110, height: 125 }} />
                  <Image source={require('../assets/ach17.png')} style={{ width: 110, height: 125 }} />
              
                  <Image source={require('../assets/ach4.png')} style={{ width: 110, height: 125 }} />
                  <Image source={require('../assets/ach6.png')} style={{ width: 110, height: 125 }} />
                  <Image source={require('../assets/ach7.png')} style={{ width: 110, height: 125 }} />
                  <Image source={require('../assets/ach8.png')} style={{ width: 110, height: 125 }} />
                  <Image source={require('../assets/ach9.png')} style={{ width: 110, height: 125 }} />
                  {showResult ? ( 
                    <View style={styles.resultContainer}>
                      <TouchableOpacity onPress={handlePress}>
                          <Image source={require('../assets/resultach1.png')} style={{ width: 300, height: 320 }}/>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity onPress={handlePress}>
                      <Image source={require('../assets/ach16.png')} style={{ width: 110, height: 125 }} />
                    </TouchableOpacity>
                  )}
                  <Image source={require('../assets/ach11.png')} style={{ width: 110, height: 125, opacity: 0.5 }} />
                  <Image source={require('../assets/ach12.png')} style={{ width: 110, height: 125 , opacity: 0.5}} />
                  <Image source={require('../assets/ach13.png')} style={{ width: 110, height: 125 , opacity: 0.5}} />
                  <Image source={require('../assets/ach14.png')} style={{ width: 110, height: 125 , opacity: 0.5}} />
                  <Image source={require('../assets/ach15.png')} style={{ width: 110, height: 125 , opacity: 0.5}} />
                  <Image source={require('../assets/ach18.png')} style={{ width: 110, height: 125 , opacity: 0.5}} />
              </View>

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

          </ImageBackground>
        
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 80,
        borderTopWidth: 1,
        borderTopColor: '#eaeaea',
        marginTop: 40, 
        borderWidth: 1,
        
        
      },
      iconContainer: {
        alignItems: 'center',
      },
      iconText: {
        marginTop: 5,
        fontSize: 12,
      },
      resultContainer: {
        position: 'absolute', 
        top: 70, 
        left: 30, 
        zIndex: 1, 
        borderWidth: 2,
        borderRadius: 10
      },
    });
