import api from '@services/main';

export const workProcess = () => {
  return api.get('/workprocess')
}
