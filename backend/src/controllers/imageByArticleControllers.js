// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all imageByArticles from the database
    const imageByArticles = await tables.image_by_article.readAll();

    // Respond with the imageByArticles in JSON format
    res.status(200).json(imageByArticles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific imageByArticle from the database based on the provided ID
    const imageByArticle = await tables.image_by_article.read(req.params.id);

    // If the imageByArticle is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the imageByArticle in JSON format
    if (imageByArticle == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(imageByArticle);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the imageByArticle data from the request body
  const imageByArticle = req.body;

  try {
    // Insert the imageByArticle into the database
    await tables.image_by_article.update(imageByArticle, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the imageByArticle data from the request body
  const imageByArticle = req.body;

  try {
    // Insert the imageByArticle into the database
    const insertId = await tables.image_by_article.create(imageByArticle);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted imageByArticle
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the imageByArticle data from the request body
  try {
    // Insert the imageByArticle into the database
    await tables.image_by_article.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
