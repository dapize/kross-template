import Joi from 'joi';

export const schema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().trim().email({ tlds: { allow: false } }).required(),
  message: Joi.string().trim().required()
});
