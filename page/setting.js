import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Button from '../component/button';
import CustomTextInput from '../component/text_input.js';
import Search from '../assets/search.png';
import CustomFlatList2 from '../component/flatlist2.js';
import Booking from '../component/booking.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../component/navbar.js';
export default function App({ navigation }) {
    
  const [inputText, setInputText] = useState('');
  
  return (
    <View style={styles.container}>
        <View style={styles.atas}>
         <Button width={41} height={41} placeholder="back" backgroundColor="#FFFFFF"  icon="arrow-left" marginTop={50} onPress={() => navigation.navigate('home')} style={styles.buttonback}/>
         <Text style={styles.kategori}>Setting</Text>
        </View>
        <View style={styles.kiri} >
         <Button width={327} height={89} placeholder="Premium Membership" backgroundColor="#786AD0" color='white'  marginTop={40} onPress={() => navigation.navigate('home')} style={styles.button}/> 
         <Text style={styles.account}>account</Text>
         <TouchableOpacity style={styles.accountContainer} onPress={() => navigation.navigate('profile')}>
            <Icon name="user" size={24} backgroundColor="#FFFFFF"  style={styles.profileIcon} /> 
            <Text style={styles.accountText}>Profile</Text>
            <Icon name="arrow-right" style={styles.arrowIcon} /> 
         </TouchableOpacity>
         <TouchableOpacity style={styles.accountContainer} onPress={() => navigation.navigate('changedpassword')}  >
            <Icon name="lock" size={24} backgroundColor="#FFFFFF"  style={styles.profileIcon} /> 
            <Text style={styles.accountText}>Password</Text>
            <Icon name="arrow-right" style={styles.arrowIcon2} /> 
         </TouchableOpacity>
         <TouchableOpacity style={styles.accountContainer} onPress={() => navigation.navigate('notification')}>
            <Icon name="bell" size={24} backgroundColor="#FFFFFF"  style={styles.profileIcon} /> 
            <Text style={styles.accountText}>Notifications</Text>
            <Icon name="arrow-right" style={styles.arrowIcon3} /> 
         </TouchableOpacity>
         <Text style={styles.account2}>More</Text>
         <View style={styles.accountContainer}>
            <Icon name="star" size={24} backgroundColor="#FFFFFF"  style={styles.profileIcon} /> 
            <Text style={styles.accountText}>Rate & Review</Text>
            <Icon name="arrow-right" style={styles.arrowIcon4} /> 
         </View>
         <View style={styles.accountContainer}>
            <Icon name="question" size={24} backgroundColor="#FFFFFF"  style={styles.profileIcon} /> 
            <Text style={styles.accountText}>Help</Text>
            <Icon name="arrow-right" style={styles.arrowIcon5} /> 
         </View>
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
  atas: {
    flexDirection: 'row',
  },
  kiri: {
    marginLeft: 30,
  },
  buttonback: {
    left: 18,
    borderColor: "#E8ECF4",
    borderWidth: 2,
  },
  kategori: {
    top: 60,
    left: 130,
    fontSize: 18,
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  accountText: {
    marginLeft: 30,
    fontSize: 16,
  },
  arrowIcon: {
    marginLeft: 220
  },
  arrowIcon2: {
    marginLeft: 195
  },
  arrowIcon3: {
    marginLeft: 165
  },
  arrowIcon4: {
    marginLeft: 155
  },
  arrowIcon5: {
    marginLeft: 229
  },
  account: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
  },
  account2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
  },
  logout: {
    top: 180,
    left: 140,
    fontSize: 16,
    color: '#979C9E'
  },
});
