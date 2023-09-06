import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ScrollList from '../components/ScrollList';
import AppText from '../components/TextField';

// Adding basic comment to test git
interface stateProps {
    stateHandler: () => void;
    username: string,
    logins: number,
    data: {time: string}[],
}

function HomePage(props: stateProps) {
  const { stateHandler, username, logins, data } = props;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Home Page </Text>
      </View>
      <AppText name={username} logCount={logins}/>
      <ScrollList items={data}></ScrollList>
      <View style={styles.buttonContainer}>
        <Button 
        title="Log Out"
        onPress={stateHandler}/>
      </View>
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
        marginTop: 150,
      },
      labels: {
        flex: 1,
        fontSize: 18,
        textAlign: 'left',
        marginLeft: 8,
        marginTop: 20,
      }, 
      buttonContainer: {
        paddingBottom: 150
      }
});


export default HomePage