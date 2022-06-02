import { inDevelop } from '@helpers/inDevelop';
import api from '@services/main';

export const workProcess = () => {
  const url = inDevelop() ? '/workprocess' : '/6df7fdab-75b5-4650-ae4b-386e8a4eacdd';
  return api.get(url)
}
