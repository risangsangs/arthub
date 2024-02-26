import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulasi bekerja dengan delay selama 2 detik
    const splashTimeout = setTimeout(() => {
      // Ganti halaman ke halaman utama setelah 2 detik
      navigation.replace('Onboarding1');
    }, 5000);

    // Membersihkan timeout jika komponen dilepas sebelum timeout selesai
    return () => clearTimeout(splashTimeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Replace the text with an Image component */}
      <Image
        source={require('../assets/arthub.png')} // Replace with the actual path to your image
        style={styles.image}
        resizeMode="contain" // Adjust the resizeMode according to your image requirements
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '80%', // Adjust the width according to your layout
    height: '80%', // Adjust the height according to your layout
  },
});

export default SplashScreen;
