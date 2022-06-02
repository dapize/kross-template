import { inDevelop } from '@helpers/inDevelop';
import api from '@services/main';

export const services = () => {
  const url = inDevelop() ? '/services' : '/b86a4363-7778-45f2-9d9d-55d9019923ad';
  return api.get(url)
}
