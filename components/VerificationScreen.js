// components/VerificationScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from 'react-native';

const VerificationScreen = ({ navigation }) => {
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
  };

  const handleResendCode = () => {
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 3000);
  };

  const showNotification = () => {
    Alert.alert('Notification', 'Code resent, please check your phone');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Image source={require('../assets/back_arrow.png')} style={styles.backArrow} />
      </TouchableOpacity>
      <Text style={styles.title}>Enter your 4-digit code</Text>
      <Text style={styles.subtitle}>Code</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="- - - -"
          keyboardType="numeric"
          maxLength={4}
        />
      </View>
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Image source={require('../assets/next_arrow.png')} style={styles.nextArrow} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleResendCode} style={styles.resendCode}>
        <Text style={styles.resendCodeText}>Resend Code</Text>
      </TouchableOpacity>
      {notificationVisible && (
        <TouchableOpacity onPress={showNotification} style={styles.notification}>
          <Text style={styles.notificationText}>Code resent, please check your phone</Text>
        </TouchableOpacity>
      )}
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
  resendCode: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  resendCodeText: {
    color: '#5eb078',
    fontSize: 14,
    fontWeight: 'bold',
  },
  notification: {
    position: 'absolute',
    bottom: 70,
    left: 20,
    backgroundColor: '#5eb078',
    padding: 10,
    borderRadius: 5,
  },
  notificationText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default VerificationScreen;
