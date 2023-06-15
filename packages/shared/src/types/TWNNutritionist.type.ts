// TODO: HACER BIEN EL TIPO DE NUTRITIONIST
import { TWNUser } from './TWNUser.type';
import { TWNNutritionistService } from './TWNNutritionistService.type';

type TWNMainContact = 'phoneNumber' | 'whatsapp';

export interface TWNNutritionist extends TWNUser {
  pictureUrl: string;
  banner: string;
  nutritionistProfile: {
    logoUrl: string;
    mainContact: TWNMainContact;
    mainDegree: string;
    about: string;
    usersInPlan: number;
    activatedUsers: number;
    professionalLicense: string;
    canUseAgenda: boolean;
    planStatus: string;
    services: TWNNutritionistService[];
    settings: {
      canReschedule: boolean;
    };
  };
}
