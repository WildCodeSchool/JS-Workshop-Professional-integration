const AbstractManager = require("./AbstractManager");

class PublisherManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "publisher" as configuration
    super({ table: "publisher" });
  }

  // The C of CRUD - Create operation

  async create(publisher) {
    const { name, website, description, logoId } = publisher;
    // Execute the SQL INSERT query to add a new publisher to the "publisher" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, website, description, logo_id) values (?, ?, ?, ?)`,
      [name, website, description, logoId]
    );

    // Return the ID of the newly inserted publisher
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific publisher by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the publisher
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all publishers from the "publisher" table
    const [rows] = await this.database.query(
      `select p.id, p.name, p.website, i.src from ${this.table} as p inner join image as i on i.id = p.logo_id`
    );

    // Return the array of publishers
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing publisher

  async update(publisher, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "publisher" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [publisher, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an publisher by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = PublisherManager;
