import React from "react";
import {View, Text, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export default function Arenda() {
    return (
    <ScrollView>
        <View style={{}}>
            <Icon name="left" size={50} color="#000" />
            <Text style={{color: 'black', fontSize: 22}}>Аренда жилья</Text>
        </View>
    </ScrollView>
    )
}