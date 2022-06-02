import api from '@services/main';

export const skills = () => {
  return api.get('/skills')
}
