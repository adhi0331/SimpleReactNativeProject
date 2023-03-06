import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AppTextInput from '../components/TextInput';

interface stateProps {
    stateHandler: () => void;
    nameTextValue: string;
    nameFunction: (newValue: string) => void;
}

function Login(props: stateProps) {
  const [passwordTextValue, updatePasswordValue] = useState('');
  const { stateHandler, nameTextValue, nameFunction} = props;


  function setPasswordValue(newValue: string) {
    updatePasswordValue(newValue);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Login Page</Text>
      </View>
      <View>
        <Text style={styles.labels}>Enter Name: </Text>
      </View>
      <AppTextInput textValue = { nameTextValue } onTextChange = { nameFunction } />
      <View>
        <Text style={styles.labels}>Enter Password: </Text>
      </View>
      <AppTextInput textValue = { passwordTextValue } onTextChange = { setPasswordValue } />
      <Button 
        title="Log in"
        onPress={stateHandler}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -50,
  },
  labels: {
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 8
  },
});

export default Login