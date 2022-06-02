import api from '@services/main';

export const team = () => {
  return api.get('/team')
}
