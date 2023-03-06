import React, { useState, Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

interface TextInputProps {
    textValue: string;
    onTextChange: (newValue: string) => void;
}


class AppTextInput extends Component<TextInputProps> {

    constructor(props: TextInputProps) {
        super(props);
        const { textValue } = this.props
        this.state = { text: textValue };
    }


    render() {
        const { textValue, onTextChange } = this.props;

        function handleTextChange(newValue: string) {
            onTextChange(newValue);
        }

        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    value={ textValue }
                    onChangeText={handleTextChange}
                    placeholder={textValue}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        height: 40,
        width: 250,
        fontSize: 16,
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
  });

  export default AppTextInput;