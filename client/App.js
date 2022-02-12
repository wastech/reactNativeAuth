import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import LoadingScreen from './screens/loadingScreen';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <PaperProvider>
      {/* <LoadingScreen /> */}
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="loading" component={LoadingScreen} />
          {/* <Stack.Screen name="home" component={HomeSceen} /> */}

          <Stack.Screen name="register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
