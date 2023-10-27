import * as yup from 'yup';

export const doctorValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  specialization: yup.string().required(),
  contact_number: yup.string().required(),
  hospital_id: yup.string().nullable().required(),
});
