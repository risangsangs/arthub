import React, { useState }  from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Button from '../component/button.js';
import ImageProfil from '../assets/profile.png';
import Navbar from '../component/navbar.js';
import  CustomTextInput from '../component/text_input.js';
export default function App ({ navigation }) {
  const [inputText, setInputText] = useState('');
  return (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.text}>
        <Text style={styles.welcomeText}>Profil</Text>
        <Text style={styles.AlexanderArnold}>Detail profil anda</Text>
      </View>
      <Button width={42} height={42} placeholder="back" backgroundColor="#FFFFFF"  icon="bell" marginTop={5} onPress={() => navigation.navigate('Onboarding2')} style={styles.buttonnotif}/>
    </View>
    <View style={styles.profil}>
        <Image style={styles.imageprofil}source={ImageProfil}/>
      </View>
      <View style={styles.buttonContainer}>
      <Text style={styles.text2}>Username</Text>
          <CustomTextInput
           width={339}
           height={56}
           placeholder="Alexander Arnold"
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="#FFFFFF"
           textColor="black"
           style={styles.buttontextinput1}
          />
                <Text style={styles.text2}>Email</Text>
          <CustomTextInput
           width={339}
           height={56}
           placeholder="alexander@gmail.com"
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="#FFFFFF"
           textColor="black"
           style={styles.buttontextinput1}
          />
                          <Text style={styles.text2}>Password</Text>
          <CustomTextInput
           width={339}
           height={56}
           placeholder="Password"
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="#FFFFFF"
           textColor="black"
           style={styles.buttontextinput1}
          />
        </View>
        <View style={styles.button2}>
    <Button
    width={343}
    height={45}
    placeholder="Save Now"
    backgroundColor="#786AD0"
    textColor="#FFFFFF"
    style={[styles.buttonicon]}
  />
      <Button
    width={343}
    height={45}
    placeholder="Logout"
    backgroundColor="#FFFFF"
    textColor="#FF0000"
    style={[styles.buttonicon2]}
  />
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
  header: { 
    marginHorizontal: 25,
    marginTop: 52,
    flexDirection: 'row',
    gap: 157
  },
  welcomeText: {
    color : '#212121',
    fontSize: 14
  },
  AlexanderArnold: {
    fontSize: 18, fontWeight: 'bold', color: '#212121'
  },
  buttonnotif: {
    borderColor: "#E8ECF4",
    borderWidth: 2,
    borderRadius: 100,
  },
  profil: {
    width: 100,
    height : 100,
    borderRadius: 100,
    left: 150,
    top: 30,
  },
  imageprofil: {
    width: 100,
    height : 100,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#95989D'
  },
  buttonContainer : {
  marginTop: 30,
  marginLeft: 20
  },
  text2: {
    fontSize: 16,
    marginTop:15,
    fontWeight: 'bold'
  },
  buttontextinput1: {
    borderWidth: 1,
    borderColor: '#95989D',
    borderRadius: 50,
  },
  button2: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonicon2: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FF0000'
  }
});


