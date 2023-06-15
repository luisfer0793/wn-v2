export type TWNUser = {
  _id: string;
  isActive: boolean;
  role: 'nutritionist';
  sex: 'male' | 'female';
  name: string;
  email: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
};
