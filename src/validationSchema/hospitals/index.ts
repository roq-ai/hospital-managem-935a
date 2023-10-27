import * as yup from 'yup';

export const hospitalValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  contact_number: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
