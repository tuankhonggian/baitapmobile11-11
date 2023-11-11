// components/LoadingScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5eb078',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 120,
  },
});

export default LoadingScreen;
