const Joi = require("joi");

const getSchema = (req) => {
  const option = req.method === "POST" ? "required" : "optional";
  return Joi.object({
    name: Joi.string().max(255).presence(option),
    website: Joi.string().max(255).presence(option),
    description: Joi.string().presence(option),
    logo_id: Joi.number().presence("optional"),
  });
};

const publisherValidation = (req, res, next) => {
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

module.exports = publisherValidation;
