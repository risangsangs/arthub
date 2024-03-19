import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const CustomFlatList = () => {
  const data = [
    {
      id: '1',
      imageSource: require('../assets/event1.png'),
      mainText: 'Coldplay : Music Of the Spheres 2024',
      imageSourceProfil: require('../assets/chirsty.jpg'),
      leftBoxText: 'By: chirsty',
      rightText1: '27 Juni 2024',
      rightText2: 'Rp 90.000',
    },
    {
      id: '2',
      imageSource: require('../assets/event2.png'),
      mainText: 'Coldplay : Music Of the Spheres 2024',
      imageSourceProfil: require('../assets/citra.jpg'),
      leftBoxText: 'By: citra',
      rightText1: '27 Juni 2024',
      rightText2: 'Rp 90.000',
    },
    // Add more data as needed
  ];

  const renderItem = ({ item }) => (
    <View style={{ marginLeft: 13, marginTop: 10 }}>
      <View style={{height: 290}}>
      <View style={{ position: 'relative' }}>
          <Image source={item.imageSource} style={{ width: 289, height: 178 }} />
          <View style={{ position: 'absolute', top: 16, left: 15, width: 57, height: 24,  borderRadius: 6, backgroundColor: 'rgba(255, 255, 255, 0.4)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 10, color: "#FFFFFF", }}>Musik</Text>
          </View>
          <TouchableOpacity style={{ position: 'absolute', top: 16, right: 13, }}>
          <View style={{ width: 24, height: 24, borderRadius: 6, backgroundColor: 'rgba(255, 255, 255, 0.4)', justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="bookmark" size={20} color="#FFFFFF"  />
          </View>
          </TouchableOpacity>
      </View>
      <TouchableOpacity>
      <Text style={{ fontSize: 18, marginTop: 5, maxWidth: 289 }}>{item.mainText}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={item.imageSourceProfil} style={{ width: 20, height: 20, borderRadius: 5, marginRight: 5, marginTop: 10 }} />
        <Text style={{ fontSize: 10, marginTop: 11 }}>{item.leftBoxText}</Text>
        <Text style={{ fontSize: 10, marginLeft: 95, marginTop: 11 }}>{item.rightText1}</Text>
        <View style={{width:3, height: 3, borderRadius:30, borderWidth: 1, borderColor: '#828282', backgroundColor : '#828282',width:3, height: 3, borderRadius:30, borderWidth: 1, borderColor: '#828282', backgroundColor : '#828282', top: 6, marginLeft: 5}}></View>
        <Text style={{ fontSize: 10, marginTop: 11, marginLeft: 3 }}>{item.rightText2}</Text>
      </View>
      </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      // Add more FlatList props as needed
    />
  );
};

export default CustomFlatList;
