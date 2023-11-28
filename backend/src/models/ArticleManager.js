const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "article" as configuration
    super({ table: "article" });
  }

  // The C of CRUD - Create operation

  async create(article) {
    const { title, subtitle, content, modifiedAt, authorId, publisherId } =
      article;
    // Execute the SQL INSERT query to add a new article to the "article" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, subtitle, content, modified_at, author_id, publisher_id) values (?, ?, ?, ?, ?, ?)`,
      [title, subtitle, content, modifiedAt, authorId, publisherId]
    );

    // Return the ID of the newly inserted article
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific article by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the article
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all articles from the "article" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of articles
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing article

  async update(article, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "article" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [article, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an article by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = ArticleManager;
