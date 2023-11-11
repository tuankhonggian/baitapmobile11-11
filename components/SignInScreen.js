// components/SignInScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('PhoneNumber');
  };

  const handlePhoneNumberInputPress = () => {
    navigation.navigate('PhoneNumber');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/login.png')} style={styles.background} />
      <View style={styles.topHalfContainer}>
        <Text style={styles.groceriesText}>Get your groceries{"\n"}with nectar</Text>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.inputContainer}>
            <View style={styles.flagInputContainer}>
              <Text style={styles.flag}>🇻🇳 +84</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              onTouchStart={handlePhoneNumberInputPress}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.middleAlignContainer}>
          <Text style={styles.connectText}>Or connect with social media</Text>
        </View>
        <TouchableOpacity style={styles.socialButtonGoogle} onPress={() => {}}>
          <Image source={require('../assets/google.png')} style={styles.icon} />
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonFacebook} onPress={() => {}}>
          <Image source={require('../assets/facebook.png')} style={styles.icon} />
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },
  topHalfContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 20,
    justifyContent: 'center',
  },
  groceriesText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  flagInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  flag: {
    fontSize: 18,
    marginRight: 5,
    color: 'black',
  },
  input: {
    flex: 1,
    fontSize: 18,
    borderBottomWidth: 1,
    paddingVertical: 5,
    color: 'black',
  },
  middleAlignContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  connectText: {
    color: '#888888',
    fontSize: 14,

  },
  socialButtonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5683e8',
    borderRadius: 18,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    
  },
  socialButtonFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4b66a9',
    borderRadius: 18,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: 5,
  },
  socialButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 45,
  },
});

export default SignInScreen;
