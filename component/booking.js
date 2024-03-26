import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookingDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
      <Text style={styles.bookingText}>Your Booking</Text>
      <View style={styles.infoContainer}>
        <Icon name="calendar" size={20} style={styles.icon} />
        <Text style={styles.label}>Name</Text>
        <View style={styles.gap}> 
        <Text style={styles.value}>Alexander</Text>
        </View> 
      </View>
      <View style={styles.infoContainer}>
        <Icon name="calendar" size={20} style={styles.icon} />
        <Text style={styles.label}>Dates</Text>
        <View style={styles.gap2}> 
        <Text style={styles.value}>Wed, 27 Nov 2023</Text>
        </View> 
      </View>
      <View style={styles.infoContainer}>
        <Icon name="clock-o" size={20} style={styles.icon} />
        <Text style={styles.label}>Time</Text>
        <View style={styles.gap3}> 
        <Text style={styles.value}>09:00 AM</Text>
        </View>
      </View>
      <View style={styles.garis}></View>
      <Text style={styles.bookingText2}>Price Details</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Price</Text>
        <View style={styles.gap4}> 
        <Text style={styles.value}>$62.00</Text>
        </View> 
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Apps fee</Text>
        <View style={styles.gap5}> 
        <Text style={styles.value}>$2.50</Text>
        </View> 
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Total price</Text>
        <View style={styles.gap6}> 
        <Text style={styles.value}>$64.50</Text>
        </View>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 335,
    height: 326,
    borderWidth: 1,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  text : {
    marginTop: 10,
    marginLeft: 15,
  },
  gap: {
    marginLeft: 161,
  },
  gap2: {
    marginLeft: 110,
  },
  gap3: {
    marginLeft: 170
  },
  gap4: {
    marginLeft: 215,
  },
  gap5: {
    marginLeft: 198,
  },
  gap6: {
    marginLeft: 180,
  },
  bookingText: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
    marginTop: 2,
  },
  bookingText2: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
    marginTop: 17,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 14,
    marginRight: 5,
    marginTop: 2,
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  garis: {
    width : 303,
    borderStyle: 'dashed',
    borderColor: '#DOD5DD',
    borderWidth: 1,
    marginTop: 15,
  },
});

export default BookingDetails;
