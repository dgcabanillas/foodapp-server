import * as yup from 'yup';
import { object, string , number} from 'yup';
export const editProjectValidateSchema = yup.object({
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
  params: yup.object({
    projectId: string().required('project id is required'),
  }),
});

