import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../components/Input';
import { colors } from '../global/colorPalette';
import { useLogInMutation } from '../services/authServices';
import { setUser } from '../features/authSlice';
import { LinearGradient } from 'react-native-svg';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [triggerSignUp, result] = useLogInMutation();

    const dispatch = useDispatch();

    const onSubmit = () => {
        triggerSignUp({ email, password })
    }

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data))
        }
    }, [result])

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <Input
                    label={"Email:"}
                    onChange={setEmail} />

                <Input
                    label={"Contraseñá:"}
                    onChange={setPassword}
                    isSecureEntry={true} />

                <Pressable
                    onPress={onSubmit}
                    style={styles.buttom}>
                    <Text style={styles.text}>Ingresar</Text>
                </Pressable>
            </View>

            <View style={styles.signUpContainer}>
                <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>

                <Pressable
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.subtitleLink}>Crear una</Text>
                </Pressable>

            </View>

        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBlue,
        justifyContent: 'center',
        alignItems: 'center',
        gap:15,
    },
    inputContainer:{
        backgroundColor:colors.lightBlue,
        borderRadius: 30,
    },
    buttom: {
        padding:20,
        backgroundColor:colors.orange,
        alignSelf: 'center',
        borderRadius:30,
        marginBottom:10,
    },
    signUpContainer:{
        alignItems:'center',
        borderRadius:30,
        padding:15,
        width:350,
        backgroundColor:colors.black,
        gap:5,
    },
    subtitle:{
        color:colors.white,
    },
    subtitleLink:{
        backgroundColor: colors.white,
        padding:5,
        paddingHorizontal:10,
        borderRadius:20
    }

})