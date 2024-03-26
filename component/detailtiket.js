import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../component/button';

const PropsCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/event5.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Coldplay: Music of the Spheres</Text>
      <Text style={styles.subtitle}>13 Maret 2024 ~ Gelora Bung Karno Stadium, Jakarta</Text>
      <View style={styles.garis}></View>
      <View style={styles.bawah}>
      <View style={styles.detailsContainer}>
        <View style={styles.leftDetails}>
          <Text style={styles.detailLabel}>Name</Text>
        </View>
        <View style={styles.rightDetails}>
          <Text style={styles.detailLabel2}>Order Number</Text>
        </View>
      </View>
      <View style={styles.detailsContainer2}>
        <View style={styles.leftDetails}>
          <Text style={styles.detailContentBold}>Indriyani Puspita</Text>
        </View>
        <View style={styles.rightDetails}>
          <Text style={styles.detailContentBold}>CLD09738PL</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.leftDetails}>
          <Text style={styles.detailLabel}>Date</Text>
        </View>
        <View style={styles.rightDetails}>
          <Text style={styles.detailLabel3}>Time</Text>
        </View>
      </View>
      <View style={styles.detailsContainer2}>
        <View style={styles.leftDetails}>
          <Text style={styles.detailContentBold}>13 Maret 2024</Text>
        </View>
        <View style={styles.rightDetails}>
          <Text style={styles.detailContentBold2}>9:00 PM</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.leftDetails}>
          <Text style={styles.detailLabel}>Kategori</Text>
        </View>
        <View style={styles.rightDetails}>
          <Text style={styles.detailLabel4}>Lokasi</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.leftDetails}>
          <Text style={styles.detailContentBold}>Musik</Text>
        </View>
        <View style={styles.rightDetails}>
          <Text style={styles.detailContentBold3}>GBK</Text>
        </View>
      </View>
      <View style={styles.garis2}></View>
      <Image
          source={require('../assets/barcode.png')} // Assuming your image path
          style={styles.barcode}
        />
      <Text style={styles.text}>Scan your barcode at the entry gate.</Text>
      <View style={styles.button}>
      <Button
    width={161}
    height={60}
    placeholder="Semua"
    backgroundColor="#FFFFFF"
    textColor="black"
    onPress={() => navigation.navigate('kategori')} 
    style={[styles.buttonicon2, { marginRight: 10, borderWidth: 1, borderColor: 'black' }]}
  />
  <Button
    width={161}
    height={60}
    placeholder="Teater"
    backgroundColor="#786AD0"
    textColor="white"
    onPress={() => navigation.navigate('checkoutchanged')} 
    style={[styles.buttonicon, { marginRight: 10 }]}
  />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 343,
    height: 596,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  image: {
    width: 308,
    height: 159,
    marginBottom: 10,
  },
  garis: {
    width: 290,
    borderWidth: 1,
    borderColor: 'rgba(103, 94, 94, 0.05)',
  },
  garis2: {
    width: 310,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#d0cdcd',
    marginTop: 20,
  },
  
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 15,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  detailsContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  leftDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 12,
    marginRight: 5,
  },
  detailLabel2: {
    fontSize: 12,
    marginRight: 7,
  },
  detailLabel3: {
    fontSize: 12,
    marginRight: 55,
  },
  detailLabel4: {
    fontSize: 12,
    marginRight: 47,
  },
  detailContent: {
    fontSize: 12,
  },
  detailContentBold: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailContentBold2: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 30, 
  },
  detailContentBold3: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 55, 
  },
  bawah: {
    marginTop: 20,
  },
  barcode: {
    width: 270,
    height: 64,
    marginLeft: 10,
    marginTop: 20,
  },
  text : {
    fontSize: 12,
    marginLeft: 45,
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    marginTop: 50,
  }
});

export default PropsCard;
