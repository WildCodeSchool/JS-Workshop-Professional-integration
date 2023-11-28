const Joi = require("joi");

const getSchema = (req) => {
  const option = req.method === "POST" ? "required" : "optional";
  return Joi.object({
    src: Joi.string().max(255).presence(option),
    alt: Joi.string().presence(option),
    main: Joi.number().presence("optional"),
    size: Joi.number().presence(option),
  });
};

const imageValidation = (req, res, next) => {
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

module.exports = imageValidation;
