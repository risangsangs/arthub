import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

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
    <TouchableOpacity style={{ marginLeft: 13, marginTop: 10 }}>
      <Image source={item.imageSource} style={{ width: 289, height: 178 }} />
      <Text style={{ fontSize: 18, marginTop: 5, maxWidth: 289 }}>{item.mainText}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={item.imageSourceProfil} style={{ width: 20, height: 20, borderRadius: 5, marginRight: 5, marginTop: 10 }} />
        <Text style={{ fontSize: 10, marginTop: 11 }}>{item.leftBoxText}</Text>
        <Text style={{ fontSize: 10, marginLeft: 100, marginTop: 11 }}>{item.rightText1}</Text>
        <Text style={{ fontSize: 10, marginTop: 11, marginLeft: 2 }}>{item.rightText2}</Text>
      </View>
    </TouchableOpacity>
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
