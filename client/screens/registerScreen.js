import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Headline, Button, TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';


export default function RegisterScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendCred = async props => {
    fetch('http://10.0.2.2:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(async data => {
        try {
          await AsyncStorage.setItem('token', data.token);
          props.navigation.replace('home');
        } catch (e) {
          console.log('error hai', e);
        }
      });
  };
  return (
    <View style={styles.container}>
      <Text>
        <Headline style={{alignItems: 'center'}}>create new account</Headline>;
      </Text>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            mode="flat"
            label="email"
            value={email}
            placeholder="enter your email"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={{marginTop: 15, marginBottom: 15}}>
          <TextInput
            label="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            right={<TextInput.Icon name="eye" />}
          />
        </View>
        <View>
          <Button
            mode="contained"
            style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
            onPress={() => sendCred(props)}>
            signup
          </Button>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 18,
                marginTop: 20,
              }}
              onPress={() => props.navigation.replace('login')}>
              already have a account ? ?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
});
