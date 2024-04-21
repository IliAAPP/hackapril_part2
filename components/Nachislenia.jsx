import React, { useState } from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FooterComponent from './Footer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Nachislenia() {
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);

  const handlePress1 = () => {
    setShowDescription1(!showDescription1);
  };

  const handlePress2 = () => {
    setShowDescription2(!showDescription2);
  };
  
  const handlePress3 = () => {
    setShowDescription3(!showDescription3);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={{ paddingTop: 0 }}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/nachislenia1.png')}
            resizeMode='contain'
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, marginLeft: 7 }}>Вопросы и ответы (Questions and Answers)</Text>
        </View>

        <View>
          <TouchableOpacity onPress={handlePress1}>
            <View style={{ backgroundColor: '#2F4F4F', padding: 10, borderRadius: 5, width: '80%', marginLeft: 35, marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
              <Text style={{ color: '#fff', fontSize: 18 }}>Как получить бонусы?</Text>
              <Icon name='down' size={20} color='#fff' />
            </View>
          </TouchableOpacity>
          {showDescription1 && (
            <View style={{ backgroundColor: 'rgba(47, 79, 79, 0.7)', padding: 10, borderRadius: 5, width: '90%', marginLeft: 15, marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: '600' }}>Чтобы получить больше бонусов, участвуйте в программе горячих туров, выполняйте задания и участвуйте в программе лояльности :)</Text>
            </View>
          )}
        </View>

        <View>
          <TouchableOpacity onPress={handlePress2}>
            <View style={{ backgroundColor: '#2F4F4F', padding: 10, borderRadius: 5, width: '80%', marginLeft: 35, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: '#fff', fontSize: 18 }}>Как повысить уровень?</Text>
              <Icon name='down' size={20} color='#fff' />
            </View>
          </TouchableOpacity>
          {showDescription2 && (
            <View style={{ backgroundColor: 'rgba(47, 79, 79, 0.7)', padding: 10, borderRadius: 5, width: '90%', marginLeft: 15, marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: '600' }}>Чтобы повысить уровень, необходимо соблюдать правила программы лояльности и своевременно выполнять задания</Text>
            </View>
          )}
        </View>

        <View>
          <TouchableOpacity onPress={handlePress3}>
            <View style={{ backgroundColor: '#2F4F4F', padding: 10, borderRadius: 5, width: '80%', marginLeft: 35, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: '#fff', fontSize: 18 }}>Куда я могу потратить бонусы?</Text>
              <Icon name='down' size={20} color='#fff' />
            </View>
          </TouchableOpacity>
          {showDescription3 && (
            <View style={{ backgroundColor: 'rgba(47, 79, 79, 0.7)', padding: 10, borderRadius: 5, width: '90%', marginLeft: 15, marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: '600' }}>Тратьте накопленные бонусы на горячие туры, получайте скидки от нашего сервиса и партнеров!</Text>
            </View>
          )}
        </View>

        <View style={{marginTop: 20}}>
            <FooterComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    width: windowWidth,
    height: windowHeight * 0.49, 
  },
  textContainer: {
    alignItems: 'flex-start',
  },
});
