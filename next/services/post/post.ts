import api from '@services/main';
import { inDevelop } from '@helpers/inDevelop';

export const post = (id: string) => {
  const url = inDevelop() ? '/post' : '/71b91222-5034-4df9-b222-1bce33310af3'
  return api.get(url, { params: { id }})
}
