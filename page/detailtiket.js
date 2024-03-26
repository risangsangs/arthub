import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Navbar from '../component/navbar.js';
import Ticket2 from  '../component/ticket2.js';
import Button from '../component/button';
import Ticket from '../component/detailtiket.js';

export default function App ({ navigation }) {

  return (
  <View style={styles.container}>
        <View style={styles.atas}>
         <Button width={41} height={41} placeholder="back" backgroundColor="#FFFFFF"  icon="arrow-left" marginTop={50} onPress={() => navigation.navigate('home')} style={styles.buttonback}/>
         <Text style={styles.kategori}>Detail Tiket</Text>
        </View>
        <View style={styles.kanan}>
        <Ticket></Ticket>
        </View>
  </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
  },
  atas: {
    flexDirection: 'row'
  },
  kanan: {
    marginLeft: 20,
    marginTop: 20,
  },
  kategori: {
    top: 60,
    left: 110,
    fontSize: 18,
  },
  header: { 
    marginHorizontal: 25,
    marginTop: 52,
  },

  text: {
    fontSize: 24, fontWeight: 'bold', color: '#212121'
  },
});


