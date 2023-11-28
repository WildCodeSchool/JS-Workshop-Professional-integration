// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all authors from the database
    const authors = await tables.author.readAll();

    // Respond with the authors in JSON format
    res.status(200).json(authors);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific author from the database based on the provided ID
    const author = await tables.author.read(req.params.id);

    // If the author is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the author in JSON format
    if (author == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(author);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the author data from the request body
  const author = req.body;

  try {
    // Insert the author into the database
    await tables.author.update(author, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the author data from the request body
  const author = req.body;

  try {
    // Insert the author into the database
    const insertId = await tables.author.create(author);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted author
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the author data from the request body
  try {
    // Insert the author into the database
    await tables.author.delete(req.params.id);

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
