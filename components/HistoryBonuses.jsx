import React from 'react';
import { View, TextInput, StyleSheet, StatusBar, Image, Text, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign';
import FooterComponent from './Footer';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function HistoryBonuses() {
    const navigation = useNavigation();
  return (
    <ScrollView>
      <ImageBackground source={require('../assets/green_background.jpg')} style={{ resizeMode: 'cover', width: '100%', height: '100%'}} >
        <View>
          <Text style={{marginTop: 10, marginLeft: 20, fontSize: 20, color:'black', fontWeight:'bold', marginBottom: 10}}>История зачислений</Text>
        </View >


                <View style={{backgroundColor: 'white', width: '70%', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 50, marginBottom: 15}}>
                    <View >
                        <Text style={{marginBottom: 15, fontWeight: '600', fontSize: 20}}>Покупка</Text>
                        <Text>Сегодня в 14:00</Text>
                    </View>

                    <View style={{flexDirection: 'column', justifyContent:'space-between'}}>
                        <Text style={{fontWeight: '600', fontSize: 20}}>1370₽</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: 10, color: 'gold'}}>+50</Text>
                            <Icon name='coins' color='gold' size={25} />
                        </View>
                    </View>
                </View>

                <View style={{backgroundColor: 'white', width: '70%', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 50, marginBottom: 15}}>
                    <View >
                        <Text style={{marginBottom: 15, fontWeight: '600', fontSize: 20}}>Покупка</Text>
                        <Text>Сегодня в 13:30</Text>
                    </View>

                    <View style={{flexDirection: 'column', justifyContent:'space-between'}}>
                        <Text style={{fontWeight: '600', fontSize: 20}}>1050₽</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: 10, color: 'gold'}}>+300</Text>
                            <Icon name='coins' color='gold' size={25} />
                        </View>
                    </View>
                </View>

                <View style={{backgroundColor: 'white', width: '70%', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 50, marginBottom: 15}}>
                    <View >
                        <Text style={{marginBottom: 15, fontWeight: '600', fontSize: 20}}>Покупка</Text>
                        <Text>Сегодня в 13:00</Text>
                    </View>

                    <View style={{flexDirection: 'column', justifyContent:'space-between'}}>
                        <Text style={{fontWeight: '600', fontSize: 20}}>780₽</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: 10, color: 'gold'}}>+310</Text>
                            <Icon name='coins' color='gold' size={25} />
                        </View>
                    </View>
                </View>

                <View style={{backgroundColor: 'white', width: '70%', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 50, marginBottom: 15}}>
                    <View >
                        <Text style={{marginBottom: 15, fontWeight: '600', fontSize: 20}}>Покупка</Text>
                        <Text>Сегодня в 12:00</Text>
                    </View>

                    <View style={{flexDirection: 'column', justifyContent:'space-between'}}>
                        <Text style={{fontWeight: '600', fontSize: 20}}>300₽</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: 10, color: 'gold'}}>+500</Text>
                            <Icon name='coins' color='gold' size={25} />
                        </View>
                    </View>
                </View>

                <View style={{backgroundColor: 'white', width: '70%', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 50, marginBottom: 15}}>
                    <View >
                        <Text style={{marginBottom: 15, fontWeight: '600', fontSize: 20}}>Покупка</Text>
                        <Text>Сегодня в 12:00</Text>
                    </View>

                    <View style={{flexDirection: 'column', justifyContent:'space-between'}}>
                        <Text style={{fontWeight: '600', fontSize: 20}}>300₽</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: 10, color: 'gold'}}>+500</Text>
                            <Icon name='coins' color='gold' size={25} />
                        </View>
                    </View>
                </View>

                <View style={{backgroundColor: 'white', width: '70%', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 50, marginBottom: 15}}>
                    <View >
                        <Text style={{marginBottom: 15, fontWeight: '600', fontSize: 20}}>Покупка</Text>
                        <Text>Сегодня в 10:00</Text>
                    </View>

                    <View style={{flexDirection: 'column', justifyContent:'space-between'}}>
                        <Text style={{fontWeight: '600', fontSize: 20}}>100₽</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: 10, color: 'gold'}}>+50</Text>
                            <Icon name='coins' color='gold' size={25} />
                        </View>
                    </View>
                </View>

                <TouchableHighlight underlayColor= 'transeclucent' onPress={() =>navigation.navigate('Nachislenia')}>
                    <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', backgroundColor: '#F0FFF0', borderRadius: 10, width: '80%', marginLeft: 30, marginBottom: 10}}>
                        <Text style={{marginRight: 5, fontSize: 20, marginBottom: 10, fontWeight: '500'}}>Начисления за покупки</Text>
                        <Icon2 name='question' size={27}/>
                    </View>
                </TouchableHighlight>

                <FooterComponent />

      </ImageBackground>
    </ScrollView>
  );
}


  