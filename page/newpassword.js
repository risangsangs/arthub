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
         Create new password
        </Text>
        <Text style={styles.textHeader2}>
        Your new password must be unique from 
        </Text>
        <Text style={styles.textHeader3}>
        those previously used.
        </Text>
        <View style={styles.buttonContainer}>
          <CustomTextInput
           width={345}
           height={56}
           placeholder="New Password"
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="#E8ECF4"
           textColor="black"
           style={styles.buttontextinput1}
          />
           <CustomTextInput
           width={345}
           height={56}
           placeholder="Confrim Password"
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="#E8ECF4"
           textColor="black"
           style={styles.buttontextinput1}
          />
        </View>
      <Button width={345} height={56} placeholder="Reset Password" backgroundColor="#786AD0" textColor="white" marginTop={27} onPress={() => navigation.navigate('passwordchanged')} />
    
    
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
  
  textHeader: {
    fontSize: 30,
    color: "#1E232C",
    marginTop: 25,
    fontWeight: "bold",
    right: 27
  },
  buttonContainer: {
    marginTop: 25, // Sesuaikan nilai marginTop sesuai keinginan Anda
  },
  textinput1: {
    borderColor: "#F7F8F9",
    borderWidth: 2,
  },
  textHeader2: {
    fontSize: 16,
    color: "#1E232C",
    right: 25,
    marginTop: 7
  },
  textHeader3: {
    fontSize: 16,
    color: "#1E232C",
    right: 90,
    marginTop: 7
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

