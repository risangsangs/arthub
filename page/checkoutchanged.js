import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import Button from '../component/button';

const App = ( { navigation } ) => (
  <View style={styles.container}>
        <View style={styles.atas}>
         <Button width={41} height={41} placeholder="back" backgroundColor="#FFFFFF"  icon="arrow-left" marginTop={50} onPress={() => navigation.navigate('home')} style={styles.buttonback}/>
         <Text style={styles.kategori}>ticket</Text>
        </View>
      <Image
        source={require('../assets/Successmark.png')} // Ganti dengan path sebenarnya ke gambar Anda
        style={styles.image}
        resizeMode="contain" // Sesuaikan resizeMode sesuai kebutuhan gambar Anda
      />
      <Text style={styles.header1}>Payment Succes</Text>
      <Text style={styles.header2}>Your ticket has been </Text>
      <Text style={styles.header3}>successfully purchased.</Text>
      <Button width={339} height={56} placeholder="Back to Home" backgroundColor="#786AD0" textColor="white" marginTop={50} onPress={() => navigation.navigate('home')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  atas: {
    flexDirection: 'row',
    bottom: 100,
  },
  buttonback: {
    borderColor: "#E8ECF4",
    borderWidth: 2,
    bottom: 47,
    right: 129,
  },
  kategori: {
    fontSize: 18,
    top: 12,
    right: 20,
  },
  image: {
    width: '30%',
    height: '30%',
  },
  header1: {
    fontSize: 30,
    color: "#1E232C",
    bottom: 20,
    fontWeight: "bold",
  }
});

export default App;
