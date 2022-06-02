import api from '@services/main';

export const learnings = () => {
  return api.get('/learnings')
}
