const Joi = require("joi");

const getSchema = (req) => {
  const option = req.method === "POST" ? "required" : "optional";
  return Joi.object({
    id: Joi.number().presence("optional"),
    title: Joi.string().max(255).presence(option),
    subtitle: Joi.string().max(255).presence(option),
    content: Joi.string().presence(option),
    modified_at: Joi.date().presence("optional"),
    authors_id: Joi.number().presence(option),
    publishers_id: Joi.number().presence(option),
    created_at: Joi.date().presence("optional"),
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
