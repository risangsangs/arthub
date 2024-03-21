import React from 'react';
import { FlatList, Image, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../component/button';
const MyFlatList = () => {
    const data = [
        {
          id: 1,
          imageSource: require('../assets/event1.png'),
          title: 'Coldplay : Music Of the Spheres 2024',
          subtitle: 'Jakarta',
          date: '13 Maret 2024, 09:00',
          description: 'Description',
          subdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Lorem adipiscing mus vestibulum consequat porta eu ultrices feugiat. ',
        },
        // Add more items as needed
      ];
  
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Image source={item.imageSource} style={styles.image} resizeMode="cover" />
      <View style={styles.kotak}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.item}>
      <Icon name="map-marker" size={20} style={styles.iconContent} />
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
      <View style={styles.item}>
      <Icon name="calendar" size={20} style={styles.iconContent} />
      <Text style={styles.date}>{item.date}</Text>
      </View>
      </View>
      <View style={styles.text}>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.subdescription}>{item.subdescription}</Text>
      <View style={styles.line}></View>
      <View style={styles.footer}>
       <View style={styles.leftFooter}>
         <Text style={styles.footerText}>Harga</Text>
         <Text style={styles.footerText2}>Rp90k/person</Text>
       </View>
       <View style={styles.rightFooter}>
       <Button
    width={173}
    height={53}
    placeholder="Beli Tiket"
    backgroundColor="#786AD0"
    textColor="#FFFFFF"
    style={[ { marginRight: 10, borderRadius: 10, }]}
  />
       </View>
      </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 40,

    },
    image: {
        width: 395,
        height: 285,
    },
    kotak: {
        position: 'relative', // Ganti posisi menjadi relatif
        width: 335,
        height: 148,
        borderWidth: 1,
        borderColor: '#95989D',
        borderRadius: 10,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        marginTop: -74, // Sesuaikan margin top agar tetap berada di atas gambar
        alignSelf: 'center', // Pusatkan kotak secara horizontal
        justifyContent: 'center', // Pusatkan konten secara vertikal di dalam kotak
      },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#786AD0',
      maxWidth: 700,
    },
    subtitle: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 10,
      marginLeft: 18,
    },
    date: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 10,
      marginLeft: 10,
    },
    text: {
        marginLeft: 10,
    },
    description: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
    },
    subdescription: {
        fontSize: 16,
        marginTop: 10,
    },
    line: { 
        marginTop: 14,
        width: 339,
        height: 1,
        borderWidth: 1,
        borderColor: '#8C8789',
        color: 'white'
    },
    item: {
      flexDirection: 'row'
    },
    iconContent : {
      marginTop: 10
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    leftFooter: {
      alignItems: 'flex-start',
    },
    rightFooter: {
      alignItems: 'flex-end',
    },
    footerText: {
      fontSize: 13,
      color: '#212121',
    },
    footerText2: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#212121',
    },
    

});

export default MyFlatList;
