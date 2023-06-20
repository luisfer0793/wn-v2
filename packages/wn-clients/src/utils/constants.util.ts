export const BASE_URL = 'https://dev.api.wellnub.com/v1';

export const NETWORK_ERROR_MESSAGE = 'Algo salió mal, intenta más tarde';

export const LAYOUT_SIZES = {
  NAVBAR: {
    WIDTH: 250,
  },
};

export const QUERY_KEYS = Object.freeze({
  APPOINTMENTS: {
    INBODY: {
      GET: 'GET_INBODY_APPOINTMENTS',
    },
    NUTRITIONIST: {
      GET: 'GET_NUTRITIONIST_APPOINTMENTS',
    },
  },
  NUTRITIONIST: {
    GET_BY_ID: 'GET_NUTRITIONIST_BY_ID',
    GET_NUTRITIONISTS: 'GET_NUTRITIONISTS',
  },
  COMMON: {
    GET_NUTRITIONAL_PLAN: 'GET_NUTRITIONAL_PLAN',
  },
});

export const SERVICE_MODES = {
  onsite: 'Presencial',
  online: 'En línea',
  home: 'A domicilio',
};

export const DRAWERS = {
  INBODY_APPOINTMENT_DETAILS: 'INBODY_APPOINTMENT_DETAILS_DRAWER',
  NUTRITIONIST_APPOINTMNET_DETAILS: 'NUTRITIONIST_APPOINTMENT_DRAWER',
} as const;

export const MODALS = {
  INBODY: {
    PASSES_WARNING: 'InbodyPassesWarning',
  },
} as const;

export const Z_INDEXES = {
  OVERLAY: 100,
  NAVBAR: 101,
  DRAWER: 102,
};
