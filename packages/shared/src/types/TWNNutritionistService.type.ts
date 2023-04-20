import { TWNNutritionistCatalogService } from './TWNNutritionistCatalogService.type';

type TMode = 'site' | 'online' | 'home'[];

export type TWNNutritionistService = {
  _id: string;
  description: string;
  isPricePublic: boolean;
  minutesLenght: number;
  mode: TMode;
  price: number;
  service: TWNNutritionistCatalogService;
};
