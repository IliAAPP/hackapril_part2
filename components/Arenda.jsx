import React from "react";
import {View, Text, ScrollView, Image, SafeAreaView, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Arenda() {
    return (
    <ScrollView>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="left" size={50} color="#000" />
            <Text style={{color: 'black', fontSize: 22}}>Аренда жилья</Text>
        </View>

        <View style={{flexDirection: 'column', alignItems: 'center', justifyContent:'space-between', marginTop: 30, marginLeft: 15}}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center'}}>Мест - 40</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', marginTop: 30, marginRight: 15}}>
                <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', color:'purple'}}>По рейтингу</Text>
                <Icon2 name="funnel" size={30} color="purple" />

            </View>
        </View>

        <View style={{marginTop: 20, marginLeft: 15}}>
            <Image source={require('../assets/room1.png')}></Image>
            <Image source={require('../assets/room2.png')}></Image>
            <Image source={require('../assets/room3.png')}></Image>
            <Image source={require('../assets/room4.png')}></Image>
        </View>

        <SafeAreaView >
            <View /> 
            <View style={styles.footer}>
                <View style={styles.iconContainer}>
                <Icon3 name="home-outline" size={30} color="#000" />
                <Text style={styles.iconText}>Главная</Text>
                </View>
                <View style={styles.iconContainer}>
                <Icon3 name="star-outline" size={30} color="#000" />
                <Text style={styles.iconText}>Лояльность</Text>
                </View>
                <View style={styles.iconContainer}>
                <Icon3 name="bell-outline" size={30} color="#000" />
                <Text style={styles.iconText}>Уведомления</Text>
                </View>
                <View style={styles.iconContainer}>
                <Icon3 name="heart-outline" size={30} color="#000" />
                <Text style={styles.iconText}>Избранное</Text>
                </View>
            </View>
        </SafeAreaView>
    </ScrollView>

    )
}

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
  });