import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={{...styles.cutEdge, left: -6}} />
      <View style={{...styles.cutEdge, right: -6}} />
      <View style={styles.row}>
        <Image
          source={require('../assets/event4.png')} // Assuming your image path
          style={styles.image}
        />
        <Text style={styles.text}>Augmented Reality Trends for 2022</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.dateTimeContainer}>
        <Text style={styles.date}>Date</Text>
        <Text style={styles.time}>Time</Text>
      </View>
      <View style={styles.dateTimeContainer}>
        <Text style={styles.date}>13 Maret 2024</Text>
        <Text style={styles.time}>9:00 PM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  card: {
    width: 331,
    height: 155,
    padding: 10,
    backgroundColor: '#f5f6f8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    marginLeft: 30,
    marginTop: 30,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 95,
    height: 71,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    maxWidth: 180
  },
  line: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
    marginVertical: 10,
    top: 4,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 12,
  },
  time: {
    fontSize: 12,
  },
  cutEdge: {
    position : 'absolute',
    right: 10,
    zIndex: 99,
    height: 11,
    top: 90,
    width: 11,
    borderRadius: 110,
    borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: '#D05DD',
    backgroundColor: '#FAFAFA'
  },
});

export default Card;
