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
    const [rows] = await this.database
      .query(`select ar.id as id, ar.title, ar.subtitle, CONCAT(au.firstname,' ',au.lastname) as author, pu.name as publisher, i.src, i.alt, i.id as image_id from ${this.table} as ar
         inner join author as au on au.id = ar.authors_id
         inner join publisher as pu on pu.id = ar.publishers_id
         inner join image_by_article as iba on iba.article_id = ar.id
         inner join image as i on i.id = iba.image_id where i.main = 1
         order by ar.id
      `);

    // Return the array of articles
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing article

  async update(article, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "article" table
    const result = await this.database.query(
      `update ${this.table} set title = ?, subtitle = ?, content = ?, authors_id = ?, publishers_id = ? where id = ?`,
      [
        article.title,
        article.subtitle,
        article.content,
        article.authors_id,
        article.publishers_id,
        id,
      ]
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
