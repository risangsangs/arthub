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
          <View style={styles.atas}>
         <Button width={41} height={41} placeholder="back" backgroundColor="#FFFFFF"  icon="arrow-left" marginTop={50} onPress={() => navigation.navigate('home')} style={styles.buttonback}/>
         <Text style={styles.kategori}>Detail Event</Text>
        </View>
  <Detailevent />
  <View style={styles.bawah}>
  <Navbar />
  </View>
  </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  atas: {
    flexDirection: 'row',
  },
  kategori: {
    top: 60,
    left: 105,
    fontSize: 18,
  },
  bawah: {
    marginTop: 100,
  },
 
});


