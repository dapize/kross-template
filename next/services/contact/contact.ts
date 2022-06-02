import { inDevelop } from '@helpers/inDevelop';
import api from '@services/main';
import { FieldValues } from "react-hook-form";

export const contact = ( data: FieldValues ) => {
  const url = inDevelop() ? '/contact' : '/7d6187a7-e980-4dff-a69c-e7d37204a9f3';
  return api.post(url, data)
}
