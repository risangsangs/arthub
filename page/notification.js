import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import Button from '../component/button.js';

export default function App({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false); // State for the toggle button

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          width={41}
          height={41}
          placeholder="back"
          backgroundColor="#FFFFFF"
          icon="arrow-left"
          marginTop={50}
          onPress={() => navigation.navigate('setting')}
          style={styles.buttonback}
        />
        <Text style={styles.notificationText}>notification</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.paymentText}>Payment</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsEnabled}
          value={isEnabled}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.switchContainer}>
        <Text style={styles.trackingText}>Tracking</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsEnabled}
          value={isEnabled}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.switchContainer}>
        <Text style={styles.trackingText}>Complete Order</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsEnabled}
          value={isEnabled}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.switchContainer}>
        <Text style={styles.trackingText}>Notification</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsEnabled}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
  },
  buttonback: {
    left: 18,
    borderColor: "#E8ECF4",
    borderWidth: 2,
  },
  notificationText: {
    top: 60,
    left: 130,
    fontSize: 18,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
  paymentText: {
    fontSize: 15,
  },
  trackingText: {
    fontSize: 15,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
    marginTop: 20,
  },
});
