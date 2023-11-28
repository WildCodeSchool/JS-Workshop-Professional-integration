// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all images from the database
    const images = await tables.image.readAll();

    // Respond with the images in JSON format
    res.status(200).json(images);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific image from the database based on the provided ID
    const image = await tables.image.read(req.params.id);

    // If the image is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the image in JSON format
    if (image == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(image);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the image data from the request body
  const image = req.body;

  try {
    // Insert the image into the database
    await tables.image.update(image, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the image data from the request body
  const image = req.body;

  try {
    // Insert the image into the database
    const insertId = await tables.image.create(image);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted image
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the image data from the request body
  try {
    // Insert the image into the database
    await tables.image.delete(req.params.id);

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
