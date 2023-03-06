import React, { useState, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface LoginsProps {
    time: string;
}


class AppLogins extends Component<LoginsProps> {

    constructor(props: LoginsProps) {
        super(props);
    }


    render() {
        const { time } = this.props;


        return (
            <View style={styles.container}>
                <Text> You logged in at {time} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        height: 40,
        backgroundColor: '#ADD8E6',
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20,
        flexWrap: 'wrap',
    },
    
  });

  export default AppLogins;