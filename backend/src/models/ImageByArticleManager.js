const AbstractManager = require("./AbstractManager");

class ImageByArticleManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "imageByArticle" as configuration
    super({ table: "image_by_article" });
  }

  // The C of CRUD - Create operation

  async create(imageByArticle) {
    const { imageId, articleId } = imageByArticle;
    // Execute the SQL INSERT query to add a new imageByArticle to the "imageByArticle" table
    const [result] = await this.database.query(
      `insert into ${this.table} (image_id, article_id) values (?, ?)`,
      [imageId, articleId]
    );

    // Return the ID of the newly inserted imageByArticle
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific imageByArticle by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the imageByArticle
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all imageByArticles from the "imageByArticle" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of imageByArticles
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing imageByArticle

  async update(imageByArticle, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "imageByArticle" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [imageByArticle, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an imageByArticle by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = ImageByArticleManager;
