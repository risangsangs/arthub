import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

const MyFlatList = () => {
    const data = [
        { id: 1, imageSource: require('../assets/event1.png'), buttonText: 'semua', textdate: '27 Juni 2024', bottomText: 'Coldplay : Music Of the Spheres 2024', onButtonPress: () => {} },
        { id: 2, imageSource: require('../assets/event1.png'), buttonText: 'semua', textdate: '27 Juni 2024', bottomText: 'Teks 2', onButtonPress: () => {} },
        // ... tambahkan data lainnya sesuai kebutuhan
      ];  
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', marginBottom: 10  }}>
      {/* Gambar sebelah kiri */}
      <Image source={item.imageSource} style={{ width: 96, height: 76, marginHorizontal: 10, marginRight: 10,borderRadius: 10 }} />

      {/* Konten sebelah kanan */}
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        {/* Button dan teks di sebelah kanan atas */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
          <TouchableOpacity onPress={item.onButtonPress}>
            <View style={{ width: 50, height: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#2C2C2C' }}>{item.buttonText}</Text>
            </View>
          </TouchableOpacity>
          <Text>{item.textdate}</Text>
        </View>

        {/* Teks di sebelah kanan bawah */}
        <Text style={{ fontSize: 16 }}>{item.bottomText}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default MyFlatList;
