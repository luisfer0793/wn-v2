type TWNAddress = {
  _id: string;
  city: string;
  hall: string;
  state: string;
  street: string;
  mapUrl: string;
  zipCode: string;
  country: string;
  geoLocation: string;
  fullAddress: string;
  neighborhood: string;
};

export type TWNInbodyLocation = {
  _id: string;
  address: TWNAddress;
  email: string;
  indications: string;
  name: string;
  phoneNumber: string;
  website: string;
};
