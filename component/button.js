import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({ width, height, placeholder, onPress,  marginTop, backgroundColor, textColor, style, icon }) => {
  return (
    <TouchableOpacity style={[{ width, height, backgroundColor, marginTop, borderRadius: 10, alignItems: 'center', justifyContent: 'center', },  style ]} onPress={onPress}  >
      {icon ? ( // Check if an icon is provided
        <Icon name={icon} size={20} color={textColor} />
      ) : (
        <Text style={{ color: textColor, fontSize: 16 }}>{placeholder}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;