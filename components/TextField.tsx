import React, { useState, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TextProps {
    name: string;
    logCount: number;
}


class AppText extends Component<TextProps> {

    constructor(props: TextProps) {
        super(props);
    }


    render() {
        const { name, logCount } = this.props;

        return (
            <View style={styles.container}>
                <Text> Hello {name}. You have logged in {logCount} times</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -200,
        marginTop: -100,
    },
    
  });

  export default AppText;