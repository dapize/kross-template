import api from '@services/main';
import { inDevelop } from '@helpers/inDevelop';

export const testimonials = () => {
  const url = inDevelop() ? '/testimonials' : '/18de51d0-000d-4184-9d47-940ba427e0db'
  return api.get(url)
}
