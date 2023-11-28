// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all categoryByArticles from the database
    const categoryByArticles = await tables.category_by_article.readAll();

    // Respond with the categoryByArticles in JSON format
    res.status(200).json(categoryByArticles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific categoryByArticle from the database based on the provided ID
    const categoryByArticle = await tables.category_by_article.read(
      req.params.id
    );

    // If the categoryByArticle is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the categoryByArticle in JSON format
    if (categoryByArticle == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(categoryByArticle);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the categoryByArticle data from the request body
  const categoryByArticle = req.body;

  try {
    // Insert the categoryByArticle into the database
    await tables.category_by_article.update(categoryByArticle, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the categoryByArticle data from the request body
  const categoryByArticle = req.body;

  try {
    // Insert the categoryByArticle into the database
    const insertId = await tables.category_by_article.create(categoryByArticle);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted categoryByArticle
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the categoryByArticle data from the request body
  try {
    // Insert the categoryByArticle into the database
    await tables.category_by_article.delete(req.params.id);

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
