import React, { Component, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login  from './views/Login'
import HomePage from './views/Home'


interface Times {
  time: string;
}

export default function App() {
  const [currPage, updatePage] = useState('login');
  const [nameTextValue, updateNameValue] = useState('');
  const [numLogins, updateLogins] = useState(0);
  const [loginTimes, updateLoginTimes] = useState<Times[]>([]);

  function setNameValue(newValue: string) {
    updateNameValue(newValue);
  }

  function increaseLogins() {
    const newLogins = numLogins + 1;
    updateLogins(newLogins);
  }

  function toHomePage() {
    updatePage('home');
    increaseLogins();
    const currTime: Date = new Date();
    const currTimeString = currTime.toUTCString();
    loginTimes.push({time: currTimeString});
    updateLoginTimes(loginTimes);
  }

  function toLoginPage() {
    updatePage('login');
  }

  return (
    <View style={styles.container}>
        {
          currPage === 'login' ? (
            <Login  stateHandler = {toHomePage} nameTextValue = {nameTextValue} nameFunction = {setNameValue}/>
          ) : (<HomePage stateHandler = {toLoginPage} username={nameTextValue} logins={numLogins} data={loginTimes}/>)
        }
      </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
