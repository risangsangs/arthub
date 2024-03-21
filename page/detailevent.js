import React, { useState }  from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Button from '../component/button.js';
import ImageProfil from '../assets/profile.png';
import Navbar from '../component/navbar.js';
import  Detailevent from '../component/detailevent.js';
export default function App ({ navigation }) {
  const [inputText, setInputText] = useState('');
  return (
  <View style={styles.container}>
  <Detailevent />
  <Navbar />
  </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
 
});


