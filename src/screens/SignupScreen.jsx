import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../components/Input';
import { useSignUpMutation } from '../services/AuthServices';
import { setUser } from '../features/authSlice';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [triggerSignUp, result] = useSignUpMutation();

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
      <Input
        label={"Email:"}
        onChange={setEmail} />

      <Input
        label={"Contraseñá:"}
        onChange={setPassword}
        isSecureEntry={true} />

      <Input
        label={"Repetir Contraseña:"}
        onChange={setConfirmPassword}
        isSecureEntry={true} />

      <Pressable
        onPress={onSubmit}
        style={styles.buttom}>
        <Text style={styles.text}>Resgistrarme</Text>
      </Pressable>

      <View>
        <Text style={styles.subtitle}>¿Ya tienes una cuenta?</Text>
        <Pressable
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subtitleLink}>Ingresar</Text>
        </Pressable>

      </View>

    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({

})