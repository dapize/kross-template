import { inDevelop } from '@helpers/inDevelop';
import api from '@services/main';

export const skills = () => {
  const url = inDevelop() ? '/skills' : '/a96a9d0c-8231-4d1a-ba5c-fd87f02aeacc';
  return api.get(url);
}
