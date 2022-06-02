import api from '@services/main';
import { inDevelop } from '@helpers/inDevelop';

export const clients = () => {
  const url = inDevelop() ? '/clients' : '/9ab46a75-c1e9-4775-9543-eee54f53d917'
  return api.get(url)
}
