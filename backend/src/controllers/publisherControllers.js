// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all publishers from the database
    const publishers = await tables.publisher.readAll();

    // Respond with the publishers in JSON format
    res.status(200).json(publishers);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific publisher from the database based on the provided ID
    const publisher = await tables.publisher.read(req.params.id);

    // If the publisher is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the publisher in JSON format
    if (publisher == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(publisher);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the publisher data from the request body
  const publisher = req.body;

  try {
    // Insert the publisher into the database
    await tables.publisher.update(publisher, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the publisher data from the request body
  const publisher = req.body;

  try {
    // Insert the publisher into the database
    const insertId = await tables.publisher.create(publisher);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted publisher
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the publisher data from the request body
  try {
    // Insert the publisher into the database
    await tables.publisher.delete(req.params.id);

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
