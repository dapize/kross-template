import { inDevelop } from '@helpers/inDevelop';
import api from '@services/main';

export const learnings = () => {
  const url = inDevelop() ? '/learnings' : '/b5ccf9a6-71ec-47d8-ab0d-bb95d8ace760';
  return api.get(url)
}
