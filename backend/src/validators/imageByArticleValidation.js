const Joi = require("joi");

const getSchema = (req) => {
  const option = req.method === "POST" ? "required" : "optional";
  return Joi.object({
    image_id: Joi.number().presence(option),
    article_id: Joi.number().presence(option),
  });
};

const imageByArticleValidation = (req, res, next) => {
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

module.exports = imageByArticleValidation;
