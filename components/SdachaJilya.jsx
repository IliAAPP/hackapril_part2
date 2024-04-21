import React from 'react';
import { View, TextInput, StyleSheet, StatusBar, Image, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FooterComponent from './Footer';



export default function SdachaJilya() {

  return (
    <ScrollView>
        <View style={{flexDirection: 'row', justifyContent:'flex-end', alignItems: 'center', marginVertical: 12, marginRight: 7}}>
            <Icon name='folderopen' size={30} color='black' />
            <Text style={{fontSize: 20, color: 'black', marginLeft: 5}}>Мои документы</Text>
        </View>

        <View style={{marginTop: 10, marginLeft: 15}}>
            <Image source={require('../assets/sdacha1.png')} />
        </View>

        <View style={{flexDirection: 'row', backgroundColor: 'purple', justifyContent: 'space-between', padding: 15, width: '85%', marginLeft: 20, borderRadius: 10, marginTop: 10}}>
            <Text style={{fontWeight: '700', fontSize: 19}}>Сдать еще жилье</Text>
            <Icon name='plus' size={30} color='black' />
        </View>
        <View style={{marginLeft: 10}}>
            <Image source={require('../assets/loyal1.png')} />
        </View>
        <View style={{marginLeft: 10}}>
            <Image source={require('../assets/sdacha2.png')} />
        </View>
        <FooterComponent></FooterComponent>
    </ScrollView>
  );
}

  