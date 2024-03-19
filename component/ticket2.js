import React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Line from '../assets/line.png';

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
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.circleTop} />
      <Image source={ item.imageSource } style={styles.image} />
      <Image style={styles.search}source={Line}/>
      <View style={styles.textContainer}>
      <Text style={styles.titleText} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
        <Text style={styles.ticketsText}>{item.tickets}</Text>
      </View>
      <View style={styles.circleBottom} />
    </TouchableOpacity>
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
  cardContainer: {
    width: 331,
    height: 128,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 16,
    alignItems: 'center',
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: '#D0D5DD', 
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 19,
    left: 3,
  },
  circleTop: {
    width: 10, // Adjust size as needed
    height: 10,
    borderRadius: 10,
    backgroundColor: '#fff', // Match your card background color
    borderWidth: 1,
    borderColor: '#D0D5DD', 
    position: 'absolute',
    top: -5, // Adjust position
    left: '36%', // Center horizontally
  },
  circleBottom: {
    width: 10, // Adjust size as needed
    height: 5,
    borderTopLeftRadius: 10, // Set bottom-left and bottom-right radius for half-circle
    borderTopRightRadius: 10,
    backgroundColor: '#fff', // Match your card background color
    borderTopWidth: 1,
    borderLeftWidth : 1,
borderRightWidth : 1,
    borderColor: '#D0D5DD',
    position: 'absolute',
    bottom: 0, // Adjust position to overlap border
    left: '36%', // Center horizontally
    
  },
  search: {
      position: 'absolute',
      top: 50,
      right: 187,
      width: 20,
      height: 2,
      zIndex: 1,
      transform : [{ rotate: '90deg' }]
  },
  textContainer: {
    
  },
  titleText: {
    fontSize: 16,
    maxWidth: 190,
    fontWeight: 'bold',
    marginBottom: 15
  },
  timeText: {
    fontSize: 14,
    marginBottom: 15
  },
  ticketsText: {
    fontSize: 14,
    color: '#888888',
  },
});

export default FlatListWithCard;
