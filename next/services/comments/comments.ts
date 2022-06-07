import api from '@services/main';
import { inDevelop } from '@helpers/inDevelop';
import { IResponse } from './comments.d';

export const comments = ( postId: number ) => {
  const url = inDevelop() ? '/comments' : '/a4e48d5e-238e-4399-84b4-0d178d116028';
  return api.get<IResponse>(url, { params: { postId }})
}
