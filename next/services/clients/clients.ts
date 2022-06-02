import api from '@services/main';

export const clients = () => {
  return api.get('/clients')
}
