import {
  StyleSheet,
  Text,

  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  View,
} from 'react-native';
import React from 'react';
import { Headline, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoginScreen(props) {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text>
        <Headline style={{alignItems: 'center'}}>Headline</Headline>;
      </Text>
      <View style={styles.inputContainer}>
        <View>
          <TextInput mode="flat" label="email" placeholder="enter your email" />
        </View>
        <View style={{marginTop: 15, marginBottom: 15}}>
          <TextInput label="Password" secureTextEntry />
        </View>
        <View>
          <Button
            mode="contained"
            style={{marginLeft: 18, marginRight: 18, marginTop: 18}}>
            Login
          </Button>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 18,
                marginTop: 20,
              }}
              onPress={() => props.navigation.replace('register')}>
              dont have a account ?
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
