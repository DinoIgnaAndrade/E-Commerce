import { object, ref, string } from 'yup';

export const signupSchema = object({
    email: string()
        .required({ "empty_email": "Por Favor, indica tu email" })
        .email({ "invalid_email": "El Formato de email no es válido" }),
    password: string()
        .required({ "empty_password": "Por Favor, indica tu contraseña" })
        .min(6, { "invalid_password": "La contraseña debe tener 6 caracteres como mínimo" }),
    confirmPassword: string()
        .required({ "invalid_confirm_password": "Por Favor, confirma la contraseña" })
        .oneOf([ref('password'), null], { "invalid_match_password": "Las contraseñas deben ser iguales" })
})