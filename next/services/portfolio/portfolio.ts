import { inDevelop } from '@helpers/inDevelop';
import api from '@services/main';

export const portfolio = () => {
  const url = inDevelop() ? '/portfolio' : '/984a9c6b-26a6-4746-b9ab-bdf08c78d9b6';
  return api.get(url)
}
