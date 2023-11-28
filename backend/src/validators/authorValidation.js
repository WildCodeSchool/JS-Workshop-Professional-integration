const Joi = require("joi");

const getSchema = (req) => {
  const option = req.method === "POST" ? "required" : "optional";
  return Joi.object({
    firstname: Joi.string().max(255).presence(option),
    lastname: Joi.string().max(255).presence(option),
    job_title: Joi.string().max(255).presence(option),
    website: Joi.string().max(255).presence(option),
    facebook: Joi.string().max(255).presence(option),
    linkedIn: Joi.string().max(255).presence(option),
    avatar_id: Joi.number().presence("optional"),
    description: Joi.string().presence(option),
    birthday: Joi.date().presence("optional"),
  });
};

const authorValidation = (req, res, next) => {
  const schema = getSchema(req);

  const { error } = schema.validate(
    {
      ...req.body,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = authorValidation;
