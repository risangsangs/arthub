import React, { useState } from 'react';
import { Text, View, StyleSheet, Image,} from 'react-native';
import Button from '../component/button.js'
import  CustomTextInput from '../component/text_input.js';

export default function App({ navigation }) {
    
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
         <Button width={41} height={41} placeholder="back" backgroundColor="#FFFFFF"  icon="arrow-left" marginTop={50} onPress={() => navigation.navigate('Onboarding2')} style={styles.buttonback}/>
         <Text style={styles.textHeader}>
         OTP Verification
        </Text>
        <Text style={styles.textHeader2}>
        Enter the verification code we just sent on
        </Text>
        <Text style={styles.textHeader3}>
        your email address.
        </Text>
        <View style={styles.socialButtonsContainer}>
          <CustomTextInput
           width={70}
           height={60}
          
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="#FFFFFF"
           textColor="black"
           style={styles.textinput1}
          /> 
          <CustomTextInput
           width={70}
           height={60}
          
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="#FFFFFF"
           textColor="black"
           style={styles.textinput1}
          />
          <CustomTextInput
           width={70}
           height={60}
           
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="#FFFFFF"
           textColor="black"
           style={styles.textinput1}
          />
          <CustomTextInput
           width={70}
           height={60}
          
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="#FFFFFF"
           textColor="black"
           style={styles.textinput1}
          />
        </View>
      <Button width={345} height={56} placeholder="Verify" backgroundColor="#786AD0" textColor="white" marginTop={60} onPress={() => navigation.navigate('newpassword')} />
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    right: 66
  },
  textinput1: {
    borderColor: "#786AD0",
    borderWidth: 2,
    marginLeft: 15,
    marginHorizontal: 10,
    marginTop: 1,
  },
  textHeader2: {
    fontSize: 16,
    color: "#1E232C",
    right: 29,
    marginTop: 7
  },
  textHeader3: {
    fontSize: 16,
    color: "#1E232C",
    right: 106,
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
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30, // Adjust the paddingHorizontal as needed
  },
  

});

