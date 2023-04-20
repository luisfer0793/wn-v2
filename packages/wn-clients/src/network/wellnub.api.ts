import axios from 'axios';

import { BASE_URL } from 'utils/constants.util';

export const wellnub = axios.create({
  baseURL: BASE_URL,
});
