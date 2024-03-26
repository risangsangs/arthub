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
           <View style={styles.atas}>
         <Button width={41} height={41} placeholder="back" backgroundColor="#FFFFFF"  icon="arrow-left" marginTop={50} onPress={() => navigation.navigate('setting')} style={styles.buttonback}/>
         <Text style={styles.kategori}>Change Password</Text>
        </View>
  
      <View style={styles.buttonContainer}>
      <Text style={styles.text2}>New Password</Text>
          <CustomTextInput
           width={339}
           height={56}
           placeholder="Enter new password"
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="#FFFFFF"
           textColor="black"
           style={styles.buttontextinput1}
          />
                <Text style={styles.text2}>Confirm Password</Text>
          <CustomTextInput
           width={339}
           height={56}
           placeholder="Confirm your new password"
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="#FFFFFF"
           textColor="black"
           style={styles.buttontextinput1}
          />
        </View>
        <View style={styles.button2}>
    <Button
    width={327}
    height={56}
    placeholder="Save Changes"
    backgroundColor="#786AD0"
    textColor="#FFFFFF"
    style={[styles.buttonicon]}
  />
     
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

  buttonback: {
    left: 18,
    borderColor: "#E8ECF4",
    borderWidth: 2,
  },
  kategori: {
    top: 60,
    left: 94,
    fontSize: 18,
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
  },
  buttonicon: {
    marginRight: 15,
    marginTop: 330,
    borderRadius: 50,
  }
});


