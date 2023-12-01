/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queriesAuthors = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)

    // Insert fake data into the 'image' table for author relationship
    for (let i = 0; i < 50; i += 1) {
      queriesAuthors.push(
        database.query(
          "insert into image(src, alt, main, size) values (?, ?, ?, ?)",
          [
            faker.image.avatar(),
            faker.lorem.words(),
            false,
            faker.number.float({ min: 1, max: 10, precision: 0.001 }),
          ]
        )
      );
    }
    console.info("Image for author filled Correctly");

    // Insert fake data into the 'author' table
    for (let i = 0; i < 50; i += 1) {
      queriesAuthors.push(
        database.query(
          "insert into author(firstname, lastname, job_title, website, description, avatar_id, birthday) values (?, ?, ?, ?, ?, ?, ?)",
          [
            faker.person.firstName(),
            faker.person.lastName(),
            faker.person.jobTitle(),
            faker.internet.url(),
            faker.lorem.paragraphs(),
            i + 1,
            faker.date
              .birthdate({ min: 1900, max: 2000, mode: "year" })
              .toISOString()
              .split("T")
              .shift(),
          ]
        )
      );
    }
    await Promise.all(queriesAuthors);
    console.info("Author filled Correctly");

    const queriesPublishers = [];

    // Insert fake data into the 'image' table for publisher relationship
    for (let i = 0; i < 20; i += 1) {
      queriesPublishers.push(
        database.query(
          "insert into image(src, alt, main, size) values (?, ?, ?, ?)",
          [
            faker.image.urlLoremFlickr({
              category: "technics",
              height: 80,
              width: 80,
            }),
            faker.lorem.words(),
            false,
            faker.number.float({ min: 1, max: 10, precision: 0.001 }),
          ]
        )
      );
    }

    // Insert fake data into the 'publisher' table
    for (let i = 0; i < 20; i += 1) {
      queriesPublishers.push(
        database.query(
          "insert into publisher(name, website, description, logo_id) values (?, ?, ?, ?)",
          [
            faker.company.name(),
            faker.internet.url(),
            faker.lorem.paragraphs(),
            i + 51,
          ]
        )
      );
    }
    await Promise.all(queriesPublishers);
    console.info("Publisher filled Correctly");

    // Insert fake data into the 'article' table
    const queriesArticles = [];
    for (let i = 0; i < 250; i += 1) {
      queriesArticles.push(
        database.query(
          "insert into article(title, subtitle, content, author_id, publisher_id) values (?, ?, ?, ?, ?)",
          [
            faker.lorem.words({ min: 4, max: 8 }),
            faker.lorem.lines({ min: 1, max: 3 }),
            faker.lorem.paragraphs({ min: 3, max: 5 }),
            Math.ceil(Math.random() * 50),
            Math.ceil(Math.random() * 20),
          ]
        )
      );
    }

    // Insert Image in the table for the many to many article relationship
    for (let i = 0; i < 1250; i += 1) {
      queriesArticles.push(
        database.query(
          "insert into image(src, alt, main, size) values (?, ?, ?, ?)",
          [
            faker.image.urlLoremFlickr({
              category: "technics",
            }),
            `${faker.lorem.words()} article`,
            (i + 69) % 5 === 0,
            faker.number.float({ min: 1, max: 10, precision: 0.001 }),
          ]
        )
      );
    }

    // Mise en place de la relation images / articles
    for (let i = 0; i < 1250; i += 1) {
      queriesArticles.push(
        database.query(
          "insert into image_by_article(image_id, article_id) values (?, ?)",
          [i + 71, Math.floor(i / 5) + 1]
        )
      );
    }
    await Promise.all(queriesArticles);
    console.info("Articles filled correctly");

    // Insert of the category
    const queriesCategory = [];
    for (let i = 0; i < 30; i += 1) {
      queriesCategory.push(
        database.query(
          "insert into category(label, description) values (?, ?)",
          [faker.lorem.word(), faker.lorem.lines({ min: 1, max: 3 })]
        )
      );
    }

    for (let i = 0; i < 250; i += 1) {
      const article = i + 1;
      const rand = Math.ceil(Math.random() * 10);
      queriesCategory.push(
        database.query(
          "insert into category_by_article(article_id, category_id) values (?, ?), (?, ?), (?, ?)",
          [article, rand, article, rand + 10, article, rand + 20]
        )
      );
    }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queriesCategory);
    console.info("Category filled correctly");

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
