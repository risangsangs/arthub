import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Button from '../component/button';
import CustomTextInput from '../component/text_input.js';
import Search from '../assets/search.png';
import CustomFlatList2 from '../component/flatlist2.js';

export default function App({ navigation }) {
    
  const [inputText, setInputText] = useState('');
  
  return (
    <View style={styles.container}>
        <View style={styles.atas}>
         <Button width={41} height={41} placeholder="back" backgroundColor="#FFFFFF"  icon="arrow-left" marginTop={50} onPress={() => navigation.navigate('home')} style={styles.buttonback}/>
         <Text style={styles.kategori}>kategori</Text>
        </View>
        <Image style={styles.search} source={Search}/>
        <CustomTextInput
           width={349}
           height={56}
           placeholder="Cari musik..."
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="white"
           textColor="black"
           style={styles.textinput}
        />
        <View style={styles.header3}>
            <Text style={styles.TrendingEvent}>Rekomendasi</Text>
            <Text style={styles.LihatSemua}>3 event</Text>
        </View>
        <View style={styles.list}>
        <CustomFlatList2 />
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
    flexDirection: 'row'
  },
  buttonback: {
    left: 18,
    borderColor: "#E8ECF4",
    borderWidth: 2,
  },
  kategori: {
    top: 60,
    left: 110,
    fontSize: 18,
  },
  search: {
    position: 'absolute',
    top: 125,
    left: 40,
    width: 24,
    height: 24,
    zIndex: 1
  },
  textinput: {
    left: 17,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 100,
    textAlign: 'center',
  },
  header3: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  TrendingEvent: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  LihatSemua: {
    fontSize: 14,
    top: 2,
  },
  list: {
    marginTop: 20,
  }
});
