import api from '@services/main';
import { inDevelop } from '@helpers/inDevelop';

export const posts = () => {
  const url = inDevelop() ? '/posts' : '/5b841e85-cfde-4ee9-ab32-e134de3e2d20'
  return api.get(url)
}
