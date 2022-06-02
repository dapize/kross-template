import { inDevelop } from '@helpers/inDevelop';
import api from '@services/main';

export const team = () => {
  const url = inDevelop() ? '/team' : '/a72529b9-f142-49c3-9bd9-8cedc540fd8a';
  return api.get(url)
}
