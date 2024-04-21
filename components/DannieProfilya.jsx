import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Entypo';

export default function DannieProfilya() {


  const [isFemaleChecked, setIsFemaleChecked] = useState(false);
  const [isMaleChecked, setIsMaleChecked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleFemale = () => {
    setIsFemaleChecked(!isFemaleChecked);
    setIsMaleChecked(false);
  };

  const toggleMale = () => {
    setIsMaleChecked(!isMaleChecked);
    setIsFemaleChecked(false);
  };

  const toggleIcon = () => {
    setIsChecked(!isChecked);
  };


  return (
    <ScrollView>
      <View style={{backgroundColor: '#DDA0DD'}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 80, marginBottom: 20 }}>
          <Image source={require('../assets/icon.png')} style={{ width: 100, height: 100, marginRight: 15 }} />
        </View>
      </View>

      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={{fontWeight: '600', fontSize: 15, marginBottom: 7, marginTop: 10}}>Имя*</Text>
        <TextInput 
          placeholder='Ваше имя...' 
          style={{ fontSize: 20, backgroundColor: 'white', color: 'black', padding: 7, width: '90%', borderRadius: 10}} 
          placeholderTextColor='gray' 
        />
      </View>

      <View style={{marginLeft: 20}}>
        <Text style={{fontWeight: '600', fontSize: 15, marginBottom: 7, marginTop: 20}}>Фамилия</Text>
        <TextInput 
          placeholder='Ваша фамилия...' 
          style={{ fontSize: 20, backgroundColor: 'white', color: 'black', padding: 7, width: '90%', borderRadius: 10}} 
          placeholderTextColor='gray' 
        />
      </View>

      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleFemale}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15, marginBottom: 10}}>
              <Icon name={isFemaleChecked ? 'check' : 'circle'} size={30}/>
              <Text style={{...styles.buttonText, marginLeft: 10}}>Женский</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleMale}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15, marginBottom: 10}}>
                <Icon name={isMaleChecked ? 'check' : 'circle'} size={30}/>
              <Text style={{...styles.buttonText, marginLeft: 10}}>Мужской</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginLeft:15}}>
        <Text style={{fontWeight: '600', fontSize: 15, marginBottom: 7, marginTop: 10, marginLeft: 7}}>Пароль</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', }}>
          <TextInput 
            placeholder='Ваш пароль' 
            style={{ fontSize: 20, backgroundColor: 'white', color: 'black', padding: 7, width: '87%', borderRadius: 10, marginRight: 7, }} 
            placeholderTextColor='gray' 
          /> 
          <Icon3 name='pencil-square' size={30}/>
        </View>
      </View>

      <TouchableOpacity onPress={toggleIcon}> 
        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
          <Icon2 name={isChecked ? 'checkcircle' : 'checkcircleo'} size={30} /> 
          <Text style={{ marginLeft: 10, fontSize: 14 }}>Я местный житель</Text>
        </View>
      </TouchableOpacity>

        <TouchableOpacity>
            <View style={{marginLeft: 5, marginTop: 20}}>
            <Image 
                source={require('../assets/gosuslugiprofile1.png')} 
                borderRadius={20} 
                style={{ width: 400, height: 50 }} 
            />
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{marginLeft: 5, marginTop: 20}}>
            <Image 
                source={require('../assets/vkprofile1.png')} 
                borderRadius={20} 
                style={{ width: 400, height: 50 }} 
            />
            </View>
        </TouchableOpacity>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#2F4F4F',
    padding: 10, 
    borderRadius: 50, 
    width: 50, 
    height: 50, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16, 
    fontWeight: '600'
  },
});
