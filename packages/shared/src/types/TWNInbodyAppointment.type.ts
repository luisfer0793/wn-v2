import { TWNInbodyLocation } from './TWNInbodyLocation.type';

type TAppointmentStatus = 'scheduled';

export type TWNInbodyAppointment = {
  _id: string;
  location: TWNInbodyLocation;
  status: TAppointmentStatus;
  scheduleDate: string;
  buyDate: string;
  expirationDate: string;
  measurementLimitDate: string;
  useDate: string;
};
