import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FooterComponent = () => {
  return (
    <SafeAreaView >
      <View /> 
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Icon name="home-outline" size={30} color="#000" />
          <Text style={styles.iconText}>Главная</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="star-outline" size={30} color="#000" />
          <Text style={styles.iconText}>Лояльность</Text>
        </View>
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
});

export default FooterComponent;
