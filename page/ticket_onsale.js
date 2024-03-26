import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Navbar from '../component/navbar.js';
import Ticket from  '../component/ticket.js';
import Ticket2 from  '../component/ticket2.js';
import Button from '../component/button';

export default function App ({ navigation }) {

  return (
    <View style={styles.container}>
        <View style={styles.atas}>
         <Button width={41} height={41} placeholder="back" backgroundColor="#FFFFFF"  icon="arrow-left" marginTop={50} onPress={() => navigation.navigate('home')} style={styles.buttonback}/>
         <Text style={styles.kategori}>Tiket</Text>
        </View>
    <Ticket />
    <View styles={styles.kiri}>
    <Ticket2 />
    </View>
    <Navbar />
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
  kiri: {
    marginHorizontal: 10,
  },
  kategori: {
    top: 60,
    left: 135,
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


