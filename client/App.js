import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import LoadingScreen from './screens/loadingScreen';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  const [isloggedin, setLogged] = useState(null);

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);

  return (
    <PaperProvider>
      {/* <LoadingScreen /> */}
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="loading" component={LoadingScreen} />
          <Stack.Screen name="login" component={LoginScreen} />

          <Stack.Screen name="home" component={HomeScreen} />

          <Stack.Screen name="register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
