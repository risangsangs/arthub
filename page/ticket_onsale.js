import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Navbar from '../component/navbar.js';
import Ticket from  '../component/ticket.js';
import Ticket2 from  '../component/ticket2.js';

export default function App ({ navigation }) {

  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.text}>My Tickets</Text>
    </View>
    <Ticket />
    <Ticket2 />
    <Navbar />
  </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: { 
    marginHorizontal: 25,
    marginTop: 52,
  },

  text: {
    fontSize: 24, fontWeight: 'bold', color: '#212121'
  },
});


