import React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Line from '../assets/line.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    id: '1',
    title: 'YOASOBI World Tour Concert - Keep Racing The Night',
    time: '08:00 PM - 10:00 PM GMT +7',
    tickets: '(4)',
    imageSource: require('../assets/event3.png'),
  },
  {
    id: '2',
    title: 'YOASOBI World Tour Concert - Keep Racing The Night',
    time: '08:00 PM - 10:00 PM GMT +7',
    tickets: '(4)',
    imageSource: require('../assets/event1.png'),
  },
  {
    id: '3',
    title: 'YOASOBI World Tour Concert - Keep Racing The Night',
    time: '08:00 PM - 10:00 PM GMT +7',
    tickets: '(4)',
    imageSource: require('../assets/event1.png'),
  },
  {
    id: '4',
    title: 'YOASOBI World Tour Concert - Keep Racing The Night',
    time: '08:00 PM - 10:00 PM GMT +7',
    tickets: '(4)',
    imageSource: require('../assets/event1.png'),
  },
  {
    id: '5',
    title: 'YOASOBI World Tour Concert - Keep Racing The Night',
    time: '08:00 PM - 10:00 PM GMT +7',
    tickets: '(4)',
    imageSource: require('../assets/event1.png'),
  },
  // Add more objects for additional items in the FlatList
];

const Card = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.cutEdge, top: -6}} />
      <View style={{...styles.cutEdge, bottom: -6}} />
      <View style={styles.itemContainer}>
        <Image source={ item.imageSource } style={styles.image} />
       <View style={styles.separator} />
       <View style={styles.content}>
        <Text style={{fontSize: 16, fontWeight: '600', color: '#131313'}} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
        <View style={styles.itemContent}>
          <Icon name="clock-o" size={16} style={styles.iconContent} />
          <Text style={{flex:1}}>{item.time}</Text>
        </View>
        <View style={styles.itemContent}>
          <Icon name="ticket" size={16} color="#2196f3" style={styles.iconContent} />
         <Text style={{color: '#2196f3'}}>See Ticket {item.tickets}</Text>
        </View>
        </View>
      </View>
    </View>
  );
};

const FlatListWithCard = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
    overflow: 'hidden',
    marginHorizontal: 20,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    backgroundColor: '#fff',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 4,
  },
  content : {
    flex: 1,
  },
  itemContent : {
    flexDirection: 'row',
    marginTop: 4,
  },
  iconContent: { 
    marginRight: 8,
    marginTop: 2,
  },
  separator: {
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#DOD5DD',
    height: '90%',
    marginHorizontal: 12,
  },
  cutEdge: {
    position : 'absolute',
    left: 135,
    zIndex: 99,
    height: 11,
    width: 11,
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: '#D05DD',
    backgroundColor: '#FAFAFA'
  },
  
});

export default FlatListWithCard;
