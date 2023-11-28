const Joi = require("joi");

const getSchema = (req) => {
  const option = req.method === "POST" ? "required" : "optional";
  return Joi.object({
    label: Joi.string().max(255).presence(option),
    description: Joi.string().presence(option),
  });
};

const categoryValidation = (req, res, next) => {
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

module.exports = categoryValidation;
