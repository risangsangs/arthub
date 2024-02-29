import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import Button from '../component/button';

const App = ( { navigation } ) => (
  <View style={styles.container}>
   
      <Image
        source={require('../assets/Successmark.png')} // Ganti dengan path sebenarnya ke gambar Anda
        style={styles.image}
        resizeMode="contain" // Sesuaikan resizeMode sesuai kebutuhan gambar Anda
      />
      <Text style={styles.header1}>Password Changed!</Text>
      <Text style={styles.header2}>Your password has been </Text>
      <Text style={styles.header3}>Password Changed!</Text>
      <Button width={339} height={56} placeholder="Back to Login" backgroundColor="#786AD0" textColor="white" marginTop={50} onPress={() => navigation.navigate('login')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
