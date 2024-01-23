import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { colors } from '../global/colorPalette';

const Input = ({ label, isSecureEntry = false , error = " " , onChange }) => {

    const [input, setInput] = useState('');

    const onHandleCHangeText = (text) => {
        setInput(text)
        onChange(text)
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={onHandleCHangeText}
                secureTextEntry={isSecureEntry}
                value={input}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer:{
        padding:18,
    },
    label:{

    },
    textInput:{
        backgroundColor: colors.white,
        paddingStart:15,
        borderRadius:30,
        width:300,
        height:30
    }
})
