import { inDevelop } from '@helpers/inDevelop';
import api from '@services/main';
import { FieldValues } from "react-hook-form";

export const comment = ( data: FieldValues ) => {
  const url = inDevelop() ? '/comment' : '/9d4c2a1c-c1ee-4cc0-8dc9-cc2959b936c5';
  return api.post(url, data)
}
