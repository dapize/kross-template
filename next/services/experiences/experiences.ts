import api from '@services/main';

export const experiences = () => {
  return api.get('/experiences')
}
