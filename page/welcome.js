import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import Button from '../component/button';

const App = ( { navigation } ) => (
  <View style={styles.container}>
    <ImageBackground source={require('../assets/bg_welcome.png')} resizeMode="cover" style={styles.imagebg}>
      <Image
        source={require('../assets/arthub.png')} // Ganti dengan path sebenarnya ke gambar Anda
        style={styles.image}
        resizeMode="contain" // Sesuaikan resizeMode sesuai kebutuhan gambar Anda
      />
      <View style={styles.buttonContainer}>
        <Button
          width={360}
          height={55}
          backgroundColor="#786AD0"
          textColor="white" 
          marginTop={-75}
          placeholder="Login"
          onPress={() => navigation.navigate('login')}
        />
        <Button
          width={360}
          height={55}
          backgroundColor="#FFFFFF"
          textColor="#786AD0" 
          marginTop={15}
          placeholder="Register"
          onPress={() => navigation.navigate('register')}
          style={styles.buttonregister}
        />
      </View>
      <Text style={styles.continueText}>Continue as a guest</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  imagebg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Add this line to center the content horizontally
  },
  image: {
    width: '40%',
    height: '40%',
    marginTop: '75%',
  },
  buttonregister: {
    borderColor: "#786AD0",
    borderWidth: 2,
  },
  buttonContainer: {
    marginTop: 5, // Sesuaikan nilai marginTop sesuai keinginan Anda
  },
  continueText: {
    marginTop:  60,
    color: '#786AD0',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
