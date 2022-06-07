import Joi from 'joi';

export const schema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().trim().email({ tlds: { allow: false } }).required(),
  comment: Joi.string().trim().required()
});
