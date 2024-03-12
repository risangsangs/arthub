import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Button from '../component/button';
import ImageProfil from '../assets/chirsty.jpg';
import Search from '../assets/search.png';
import  CustomTextInput from '../component/text_input.js';
import CustomFlatList from '../component/flatlist.js';
import CustomFlatList2 from '../component/flatlist2.js';
import Navbar from '../component/navbar.js';

const App = ({ navigation }) => (
  <View style={styles.container}>
    <ScrollView>
    <View style={styles.header}>
      <View style={styles.text}>
        <Text style={styles.welcomeText}>Selamat Datang</Text>
        <Text style={styles.AlexanderArnold}>Angelina Christy</Text>
      </View>
      <View style={styles.profil}>
        <Image style={styles.imageprofil}source={ImageProfil}/>
      </View>
    </View>
    <Image style={styles.search}source={Search}/>
    <CustomTextInput
           width={349}
           height={56}
           placeholder="              Cari event..."
           onChangeText={(text) => setInputText(text)}
           marginTop={15}
           backgroundColor="white"
           textColor="black"
           style={styles.textinput}
        >
        </CustomTextInput>
    <View style={styles.header2}>
        <Text style={styles.TrendingEvent}>Trending Event</Text>
        <Text style={styles.LihatSemua}>Lihat Semua</Text>
    </View>

    <CustomFlatList />
    <View style={styles.buttonContainer}>
      <Button
        width={95}
        height={34}
        placeholder="Semua"
        backgroundColor="#786AD0"
        textColor="#FFFFFF"
        style={styles.buttonicon}
      />
      <Button
        width={95}
        height={34}
        placeholder="Teater"
        backgroundColor="#F1F1F1"
        textColor="#8F8F8F"
      />
      <Button
        width={95}
        height={34}
        placeholder="Musik"
        backgroundColor="#F1F1F1"
        textColor="#8F8F8F"
      />
      <Button
        width={95}
        height={34}
        placeholder="Seni Rupa"
        backgroundColor="#F1F1F1"
        textColor="#8F8F8F"
      />
    </View>
    <View style={styles.header3}>
        <Text style={styles.TrendingEvent}>Rekomendasi</Text>
        <Text style={styles.LihatSemua}>Lihat Semua</Text>
    </View>
    <CustomFlatList2 />
    </ScrollView>
    <Navbar />
  </View>
);

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
  profil: {
    width: 40,
    height : 40,
    borderRadius: 100,
  },
  imageprofil: {
    width: 40,
    height : 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#95989D'
  },
  textinput: {
    left: 17,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 100,
    textAlign: 'center',
  },
  search: {
    position: 'absolute',
    top: 125,
    left: 40,
    width: 24,
    height: 24,
    zIndex: 1
  },
  header2: { 
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    gap: 135
  },
  TrendingEvent: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  LihatSemua: {
    fontSize: 14,
    color: '#786AD0',
    top: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    bottom: 40,
    marginTop: 30,
    gap: 10
  },
  header3: { 
    marginHorizontal: 10,
    bottom: 20,
    flexDirection: 'row',
    gap: 149
  },
  Rekomendasi: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default App;
