import { inDevelop } from '@helpers/inDevelop';
import api from '@services/main';

export const projects = () => {
  const url = inDevelop() ? '/projects' : '/489c9144-fdd9-4b53-8195-13c542621dc7';
  return api.get(url)
}
