const AbstractManager = require("./AbstractManager");

class AuthorManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "author" as configuration
    super({ table: "author" });
  }

  // The C of CRUD - Create operation

  async create(author) {
    const {
      firstname,
      lastname,
      jobTitle,
      website,
      facebook,
      linkedIn,
      avatarId,
      description,
      birthday,
    } = author;
    // Execute the SQL INSERT query to add a new author to the "author" table
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, job_title, website, facebook, linkedIn, avatar_id, description, birthday) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        firstname,
        lastname,
        jobTitle,
        website,
        facebook,
        linkedIn,
        avatarId,
        description,
        birthday,
      ]
    );

    // Return the ID of the newly inserted author
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific author by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the author
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all authors from the "author" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of authors
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing author

  async update(author, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "author" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [author, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an author by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = AuthorManager;
