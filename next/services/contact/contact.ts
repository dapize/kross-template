import api from '@services/main';
import { FieldValues } from "react-hook-form";

export const contact = ( data: FieldValues ) => {
  return api.post('/contact', data)
}
