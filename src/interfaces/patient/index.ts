import { AppointmentInterface } from 'interfaces/appointment';
import { HospitalInterface } from 'interfaces/hospital';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  first_name: string;
  last_name: string;
  date_of_birth: any;
  gender: string;
  contact_number: string;
  hospital_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  hospital?: HospitalInterface;
  _count?: {
    appointment?: number;
  };
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  contact_number?: string;
  hospital_id?: string;
}
