// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './components/LoadingScreen';
import WelcomeScreen from './components/WelcomeScreen';
import SignInScreen from './components/SignInScreen';
import PhoneNumberScreen from './components/PhoneNumberScreen';
import VerificationScreen from './components/VerificationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" headerMode="none">
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
