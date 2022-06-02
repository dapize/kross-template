import { inDevelop } from '@helpers/inDevelop';
import api from '@services/main';

export const experiences = () => {
  const url = inDevelop() ? '/experiences' : '/500b4c55-9ae4-45f8-a454-edddd33e52f7';
  return api.get(url)
}
