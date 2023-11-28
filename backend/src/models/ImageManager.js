const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "image" as configuration
    super({ table: "image" });
  }

  // The C of CRUD - Create operation

  async create(image) {
    const { src, alt, main, size } = image;
    // Execute the SQL INSERT query to add a new image to the "image" table
    const [result] = await this.database.query(
      `insert into ${this.table} (src, alt, main, size) values (?, ?, ?, ?)`,
      [src, alt, main, size]
    );

    // Return the ID of the newly inserted image
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific image by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the image
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all images from the "image" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of images
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing image

  async update(image, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "image" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [image, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an image by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = ImageManager;
