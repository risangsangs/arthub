import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import Button from '../component/button';
import Navbar from '../component/navbar.js';
const App = ( { navigation } ) => (
  <View style={styles.container}>
        <View style={styles.atas}>
         <Button width={41} height={41} placeholder="back" backgroundColor="#FFFFFF"  icon="arrow-left" marginTop={50} onPress={() => navigation.navigate('home')} style={styles.buttonback}/>
         <Text style={styles.kategori}>Bookmark</Text>
        </View>
      <View style={styles.tengah}>
      <Image
        source={require('../assets/bookmark2.png')} // Ganti dengan path sebenarnya ke gambar Anda
        style={styles.image}
        resizeMode="contain" // Sesuaikan resizeMode sesuai kebutuhan gambar Anda
      />
      <Text style={styles.header1}>Mari segera upgrade menjadi premium, untuk menikmati fitur ini</Text>
      <Button width={203} height={48} placeholder="Upgrade Premium" backgroundColor="#786AD0" textColor="white" marginTop={10} onPress={() => navigation.navigate('home')} />
      </View>
      <Navbar></Navbar>
  </View>
);

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
    left: 110,
    fontSize: 18,
  },
  image: {
    width: '30%',
    height: '30%',
  },
  header1: {
    fontSize: 18,
    color: "#1E232C",
    maxWidth: 280,
    fontWeight: "bold",
  },
  tengah: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
});

export default App;
