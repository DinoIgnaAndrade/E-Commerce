import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../components/Input';
import { colors } from '../global/colorPalette';
import { useSignUpMutation } from '../services/authServices';
import { setUser } from '../features/authSlice';
import { signupSchema } from '../validations/signupSchema';

const SignupScreen = ({ navigation }) => {
  //States del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // AuthServices
  const [triggerSignUp, result] = useSignUpMutation();

  //SignUp Schema errors
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  //Redux
  const dispatch = useDispatch();

  const onSubmit = () => {
    setEmailError("")
    setPasswordError("")
    setConfirmPasswordError("")
    try {
      signupSchema.validateSync({ email, password, confirmPassword }, { abortEarly: false })
    } catch (error) {
      //console.log(error.errors)
      error.errors.map(e => {
        console.log(Object.keys(e)[0])
        const customError = Object.values(e)[0]
        switch (Object.keys(e)[0]) {
          case "empty_email":
            //console.log(customError)
            setEmailError(customError)
          case "invalid_email":
            //console.log(customError)
            setEmailError(customError)
          case "empty_password":
            //console.log(customError)
            setPasswordError(customError)
          case "invalid_password":
            //console.log(customError)
            setPasswordError(customError)
          case "invalid_confirm_password":
            //console.log(customError)
            setConfirmPasswordError(customError)
          case "invalid_match_password":
            //console.log(customError)
            setConfirmPasswordError(customError)
          default:
            break
        }

      });
    }
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
          onChange={setEmail}
          error={emailError} />

        <Input
          label={"Contraseñá:"}
          onChange={setPassword}
          isSecureEntry={true}
          error={passwordError} />

        <Input
          label={"Repetir Contraseña:"}
          onChange={setConfirmPassword}
          isSecureEntry={true}
          error={confirmPasswordError} />

        <Pressable
          onPress={onSubmit}
          style={styles.buttom}>
          <Text style={styles.text}>Resgistrarme</Text>
        </Pressable>
      </View>

      <View style={styles.signUpContainer}>
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
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  inputContainer: {
    backgroundColor: colors.lightBlue,
    borderRadius: 30,
  },
  buttom: {
    padding: 20,
    backgroundColor: colors.orange,
    alignSelf: 'center',
    borderRadius: 30,
    marginBottom: 10,
  },
  signUpContainer: {
    alignItems: 'center',
    borderRadius: 30,
    padding: 15,
    width: 350,
    backgroundColor: colors.black,
    gap: 5,
  },
  subtitle: {
    color: colors.white,
  },
  subtitleLink: {
    backgroundColor: colors.white,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20
  }
})