import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Button from '../component/button';
import CustomTextInput from '../component/text_input.js';
import Search from '../assets/search.png';
import CustomFlatList2 from '../component/flatlist2.js';
import Booking from '../component/booking.js';
import Navbar from '../component/navbar.js';
export default function App({ navigation }) {
    
  const [inputText, setInputText] = useState('');
  
  return (
    <View style={styles.container}>
        <View style={styles.atas}>
         <Button width={41} height={41} placeholder="back" backgroundColor="#FFFFFF"  icon="arrow-left" marginTop={50} onPress={() => navigation.navigate('home')} style={styles.buttonback}/>
         <Text style={styles.kategori}>Checkout</Text>
        </View>
        <View style={styles.kiri}>
        <View style={styles.list}>
        <CustomFlatList2 />
        <View style={styles.kotak} >
        <Booking />
        </View>
        <Text style={styles.promo} > Select Promo </Text>
        </View>
        <Button width={327} height={52} placeholder="Selected Promo Code" backgroundColor="#FFFFFF"  marginTop={20} onPress={() => navigation.navigate('home')} style={styles.buttonpromo}/>
        <Button width={327} height={52} placeholder="Pay Now" backgroundColor="#786AD0"  marginTop={40} onPress={() => navigation.navigate('home')} style={styles.buttonpromo2}/>
        </View>
        <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  atas: {
    flexDirection: 'row'
  },
  kiri: {
    marginLeft: 20,
  },
  buttonback: {
    left: 18,
    borderColor: "#E8ECF4",
    borderWidth: 2,
  },
  kategori: {
    top: 60,
    left: 110,
    fontSize: 18,
  },
  search: {
    position: 'absolute',
    top: 125,
    left: 40,
    width: 24,
    height: 24,
    zIndex: 1
  },
  textinput: {
    left: 17,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 100,
    textAlign: 'center',
  },
  header3: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  TrendingEvent: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  LihatSemua: {
    fontSize: 14,
    top: 2,
  },
  list: {
    marginTop: 30,
  },
  kotak: {
    marginTop: 20,
  },
  promo: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: 'bold',
    left: 9,
  },
  buttonpromo: {
    left: 11,
    borderColor: "#292E32",
    borderWidth: 2,
  },
  buttonpromo2: {
    left: 11,
    textColor: 'white'
  },
});
