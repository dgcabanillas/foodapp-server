import * as yup from 'yup';

export const createProjectSchema = yup.object({
  body: yup.object({
    name: yup
      .string()
      .min(5, 'name must be at least 5 characters')
      .max(40, 'name must be at max 40 characters')
      .required('name is required'),
    image: yup
      .string()
      .required('image is required'),
    price: yup
      .number()
      .required('Price is required')
  }),
});


export const editProjectSchema = yup.object({
  body: yup.object({
    name: yup
      .string()
      .min(5, 'name must be at least 5 characters')
      .max(40, 'name must be at max 40 characters')
      .required('name is required'),
    image: yup
      .string()
      .required('image is required'),
    price: yup
      .number()
      .required('Price is required')
  }),
  params: yup.object({}),
});
