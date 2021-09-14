import config from 'app/config';

import createHttpClient from '../client';
import { AuthenticatePayload, RegisterPayload, IsRegisteredPayload, IsRegisteredResponse, Authenticate } from './types';

const httpClient = createHttpClient(config.apiBaseUrl);

export const isRegistered = (data: IsRegisteredPayload): Promise<IsRegisteredResponse> =>
  httpClient.post(`/is_registered/`, data);

export const register = (data: RegisterPayload): Promise<AuthenticatePayload> => httpClient.post(`/register/`, data);

export const authenticate = (data: Authenticate): Promise<any> => httpClient.post(`/authenticate/`, data);