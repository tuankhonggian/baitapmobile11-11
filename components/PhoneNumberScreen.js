// components/PhoneNumberScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';

const PhoneNumberScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    navigation.navigate('Verification');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Image source={require('../assets/back_arrow.png')} style={styles.backArrow} />
      </TouchableOpacity>
      <Text style={styles.title}>Enter your mobile number</Text>
      <Text style={styles.subtitle}>Mobile Number</Text>
      <View style={styles.inputContainer}>
        <View style={styles.flagInputContainer}>
          <Text style={styles.flag}>🇻🇳 +84</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Image source={require('../assets/next_arrow.png')} style={styles.nextArrow} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    marginTop: 40,
  },
  backArrow: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 140,
    textAlign: 'left',
  },
  subtitle: {
    color: '#888888',
    fontSize: 15,
    marginTop: 30,
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  flagInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  flag: {
    fontSize: 18,
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  nextArrow: {
    width: 75,
    height: 75,
  },
});

export default PhoneNumberScreen;
