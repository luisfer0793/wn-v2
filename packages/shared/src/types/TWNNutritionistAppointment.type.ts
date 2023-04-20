import { TWNNutritionistService } from './TWNNutritionistService.type';

type TActionRole = 'nutritionist' | 'client' | null;
type TUserRole = 'nutritionist' | 'client';
type TStatus = 'pending' | 'cancelled' | 'rejected' | 'accepted';
type TMode = 'online' | 'onsite' | 'home';
type TNutritionist = {
  _id: string;
  name: string;
  lastName: string;
  phoneNumber: string;
};

export interface TWNNutritionistAppointment {
  _id: string;
  nextActionRole: TActionRole;
  lastActionRole: TActionRole;
  createdByRole: TUserRole;
  startDate: string;
  status: TStatus;
  timeZone: string;
  mode: TMode;
  service: TWNNutritionistService;
  nutritionist: TNutritionist;
}
