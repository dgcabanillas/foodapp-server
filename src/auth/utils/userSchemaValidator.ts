import * as yup from 'yup';

export const loginUserSchema = yup.object({
  body: yup.object({
    email: yup
      .string()
      .email('email must be a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(5, 'password must be at least 5 characters')
      .required('Password is required'),
  }),
});

export const signUpUserSchema = yup.object({
  body: yup.object({
    email: yup
      .string()
      .email('email must be a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(5, 'password must be at least 5 characters')
      .required('Password is required'),
  }),
});
