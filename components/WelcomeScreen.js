// components/WelcomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
  }, []);

  const handleGetStarted = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/welcome.png')} style={styles.background} />
      <View style={styles.content}>
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
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
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 70,
  },
  getStartedButton: {
    backgroundColor: '#5eb078',
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 140,
    alignItems: 'center',
  },
  getStartedButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
