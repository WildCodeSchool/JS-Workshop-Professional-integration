const Joi = require("joi");

const getSchema = (req) => {
  const option = req.method === "POST" ? "required" : "optional";
  return Joi.object({
    title: Joi.string().max(255).presence(option),
    subtitle: Joi.string().max(255).presence(option),
    content: Joi.string().presence(option),
    modified_at: Joi.date().presence("optional"),
    author_id: Joi.number().presence(option),
    publisher_id: Joi.number().presence(option),
  });
};

const articleValidation = (req, res, next) => {
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

module.exports = articleValidation;
