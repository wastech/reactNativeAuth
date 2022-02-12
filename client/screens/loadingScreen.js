import React, {useEffect} from 'react';
import {StyleSheet, ActivityIndicator, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default function LoadingScreen(props) {
  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      props.navigation.replace('home');
    } else {
      props.navigation.replace('login');
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
