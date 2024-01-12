import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../components/Input';
import { useLogInMutation } from '../services/AuthServices';
import { setUser } from '../features/authSlice';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [triggerSignUp, result] = useLogInMutation();

    const dispatch = useDispatch();

    const onSubmit = () => {
        triggerSignUp({ email, password })
    }

    useEffect(()=> {
        if(result.data){
            dispatch(setUser(result.data))
        }
    },[result])

    return (
        <View style={styles.container}>
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

            <View>
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

})