import React, { useState } from 'react';
import { Text, View, StyleSheet, Image,} from 'react-native';
import Button from '../component/button'
import  CustomTextInput from '../component/text_input.js';

export default function App({ navigation }) {
    
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
         <Button width={41} height={41} placeholder="back" backgroundColor="#FFFFFF"  icon="arrow-left" marginTop={50} onPress={() => navigation.navigate('Onboarding2')} style={styles.buttonback}/>
         <Text style={styles.textHeader}>
          Welcome back! Glad 
        </Text>
        <Text style={styles.textHeader2}>
           to see you, Again!
        </Text>
        <View style={styles.buttonContainer}>
          <CustomTextInput
           width={339}
           height={56}
           placeholder="Enter text"
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="#E8ECF4"
           textColor="black"
           style={styles.buttontextinput1}
          />
          <CustomTextInput
           width={339}
           height={56}
           placeholder="Enter your password"
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="#E8ECF4"
           textColor="black"
           style={styles.buttontextinput1}
          />
        </View>
         <Text style={styles.text1} onPress={() => navigation.navigate('forgotpassword')}>
         Forgot Password?
      </Text>
      <Button width={339} height={56} placeholder="login" backgroundColor="#786AD0" textColor="white" marginTop={27} onPress={() => navigation.navigate('home')} />
      <View style={styles.orLoginWithContainer}>
        <View style={styles.line}></View>
         <Text style={styles.orLoginWithText}>Or Login with</Text>
        <View style={styles.line}></View>
      </View> 
      <View style={styles.socialButtonsContainer}>
       {/* Button with Facebook icon */}
       <Button
         width={105}
         height={56}
          placeholder=""
          icon="facebook"
          backgroundColor="#FFFFFF"
          onPress={() => navigation.navigate('Onboarding2')} 
          style={styles.buttonicon}
       />
       {/* Button with Google icon */}
       <Button
         width={105}
         height={56}
         placeholder=""
         icon="google"
         backgroundColor="#FFFFFF"
         onPress={() => navigation.navigate('Onboarding2')}
         style={styles.buttonicon}
        />

       {/* Button with Apple icon */}
       <Button
         width={105}
         height={56}
         placeholder=""
         icon="apple"
         backgroundColor="#FFFFFF"
         onPress={() => navigation.navigate('Onboarding2')} 
         style={styles.buttonicon}
        />
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don’t have an account? </Text>
         <Text style={[styles.registerText, styles.registerLink]} onPress={() => navigation.navigate('register')}>
          Register Now
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },

  buttonback: {
    right: 150,
    borderColor: "#E8ECF4",
    borderWidth: 2,
  },
  buttontextinput1: {
    borderRadius: 10
  },
  
  textHeader: {
    fontSize: 26,
    color: "#1E232C",
    marginTop: 25,
    fontWeight: "bold",
    right: 50
  },
  buttonContainer: {
    marginTop: 25, // Sesuaikan nilai marginTop sesuai keinginan Anda
  },
  textinput1: {
    borderColor: "#F7F8F9",
    borderWidth: 2,
  },
  textHeader2: {
    fontSize: 26,
    color: "#1E232C",
    fontWeight: "bold",
    right: 65
  },
  text1: {
    fontSize: 14, 
    fontWeight: 'bold', 
    left: 110,
    marginTop: 15,
    color: "#6A707C", 
  },
  orLoginWithContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#1E232C',
    marginHorizontal: 30, // Sesuaikan margin sesuai keinginan Anda
  },
  orLoginWithText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#6A707C',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30, // Adjust the paddingHorizontal as needed
  },
  
  buttonicon: {
    borderColor: "#E8ECF4",
    borderWidth: 2,
    marginHorizontal: 7
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 170,
    alignItems: 'center',
  },
    registerText: {
    fontSize: 15,
    color: '#1E232C',
  },
    registerLink: {
    textDecorationLine: 'underline',
    color: '#786AD0',
    marginLeft: 5,
  },
});

