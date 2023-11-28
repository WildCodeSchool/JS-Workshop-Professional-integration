const AbstractManager = require("./AbstractManager");

class CategoryByArticleManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "category_by_article" as configuration
    super({ table: "category_by_article" });
  }

  // The C of CRUD - Create operation

  async create(categoryByArticle) {
    const { articleId, categoryId } = categoryByArticle;
    // Execute the SQL INSERT query to add a new categoryByArticle to the "categoryByArticle" table
    const [result] = await this.database.query(
      `insert into ${this.table} (article_id, category_id) values (?, ?)`,
      [articleId, categoryId]
    );

    // Return the ID of the newly inserted categoryByArticle
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific categoryByArticle by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the categoryByArticle
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all categoryByArticles from the "categoryByArticle" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of categoryByArticles
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing categoryByArticle

  async update(categoryByArticle, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "categoryByArticle" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [categoryByArticle, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an categoryByArticle by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = CategoryByArticleManager;
