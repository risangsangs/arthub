import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const CustomTextInput = ({ width, height, placeholder, onChangeText, marginTop, backgroundColor, textColor, style }) => {
return (
<TextInput
style={[{ width, height, backgroundColor, marginTop, paddingLeft: 10, color: textColor, fontSize: 16 }, style]}
placeholder={placeholder}
onChangeText={onChangeText}
/>
);
};

export default CustomTextInput;