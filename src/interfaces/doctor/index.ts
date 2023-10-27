import { AppointmentInterface } from 'interfaces/appointment';
import { HospitalInterface } from 'interfaces/hospital';
import { GetQueryInterface } from 'interfaces';

export interface DoctorInterface {
  id?: string;
  first_name: string;
  last_name: string;
  specialization: string;
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

export interface DoctorGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  specialization?: string;
  contact_number?: string;
  hospital_id?: string;
}
