import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Button from '../component/button'

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
       <Image style= {styles.gambarts}
           source={require('../assets/welcome1.png')} 
         />
      <Text style={styles.text1}>
        Find your favourite 
      </Text>
         <Text style={styles.text2}>
         events here
      </Text>
      <Text style={styles.text3}>
        The customer is very important, the customer
      </Text>
      <Text style={styles.text4}>
         will be followed by the customer.
      </Text>
      <Image style= {styles.titik}
           source={require('../assets/titik1.png')} 
         />
      <Button width={246} height={50} placeholder="Next" backgroundColor="#786AD0" textColor="white" marginTop={35} onPress={() => navigation.navigate('Onboarding2')} />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  gambarts: {
    width: 435,
    height: 419,
    marginBottom: 48,
  },
  titik: {
    width: 44,
    height: 4,
    marginTop: 35,
  },
  titik2: {
    width: 134,
    height: 5,
    marginTop: 30,
  },
  text1: {
    fontSize: 25, 
    fontWeight: 'bold', 
    textAlign: 'center',
    marginBottom: 10
  },
  text2: {
    fontSize: 25, 
    fontWeight: 'bold', 
    textAlign: 'center',
    marginBottom: 10,
    marginTop: -10
  },
  text3: {
    fontSize: 16, 
    textAlign: 'center', 
    marginTop: 16
  },
  text4: {
    fontSize: 16, 
    textAlign: 'center', 
    marginTop: 3
  },
  line: {
width: 134,
height: 5,
borderRadius: 100,
backgroundColor: 'black', // You can change the color as needed
marginBottom: 5 // Adjust the marginTop as needed
},
});

