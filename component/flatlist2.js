import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

const MyFlatList = () => {
    const data = [
        { id: 1, imageSource: require('../assets/event1.png'), category: 'semua', textdate: '27 Juni 2024', textdate2: 'Rp 90.000', bottomText: 'Coldplay : Music Of the Spheres 2024', onButtonPress: () => {} },
        // { id: 2, imageSource: require('../assets/event1.png'), category: 'teater', textdate: '27 Juni 2024', textdate2: 'Rp 90.000', bottomText: 'Teks 2', onButtonPress: () => {} },
        // { id: 3, imageSource: require('../assets/event1.png'), category: 'semua', textdate: '27 Juni 2024', textdate2: 'Rp 90.000', bottomText: 'Teks 2', onButtonPress: () => {} },
        // ... tambahkan data lainnya sesuai kebutuhan
      ];  
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', marginBottom: 15, }}>
      {/* Gambar sebelah kiri */}
      <Image source={item.imageSource} style={{ width: 96, height: 79, marginHorizontal: 10, marginRight: 10,borderRadius: 10 }} />

      {/* Konten sebelah kanan */}
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        {/* Button dan teks di sebelah kanan atas */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
          <TouchableOpacity onPress={item.onButtonPress}>
            <View style={{ width: 50, height: 30, backgroundColor: '#F1F1F1', justifyContent: 'center', alignItems: 'center', borderRadius: 6 }}>
              <Text style={{ color: '#2C2C2C' }}>{item.category}</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ marginLeft: 70, fontSize: 10,}}>{item.textdate}</Text>
          <View style={{ width:3, height: 3, borderRadius:30, borderWidth: 1, borderColor: '#828282', backgroundColor : '#828282', marginLeft: 5}}>{item.textdate1}</View>
          <Text style={{fontSize: 10, marginLeft: 3}}>{item.textdate2}</Text>
        </View>

        {/* Teks di sebelah kanan bawah */}
        <Text style={{ fontSize: 16, fontWeight: 'bold', maxWidth: 200 }}>{item.bottomText}</Text>
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
