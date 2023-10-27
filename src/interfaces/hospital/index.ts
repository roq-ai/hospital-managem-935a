import { AppointmentInterface } from 'interfaces/appointment';
import { DoctorInterface } from 'interfaces/doctor';
import { PatientInterface } from 'interfaces/patient';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface HospitalInterface {
  id?: string;
  name: string;
  address: string;
  contact_number: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  doctor?: DoctorInterface[];
  patient?: PatientInterface[];
  company?: CompanyInterface;
  _count?: {
    appointment?: number;
    doctor?: number;
    patient?: number;
  };
}

export interface HospitalGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  contact_number?: string;
  company_id?: string;
}
