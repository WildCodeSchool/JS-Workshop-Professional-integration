const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
// const userValidation = require("./validators/userValidation");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
// router.post("/users", userValidation, userControllers.add);
// router.put("/users/:id", userValidation, userControllers.edit);
// router.delete("/users/:id", userControllers.destroy);

const categoryByArticleControllers = require("./controllers/categoryByArticleControllers");
// const categoryByArticleValidation = require("./validators/categoryByArticleValidation");

router.get("/category_by_articles", categoryByArticleControllers.browse);
router.get("/category_by_articles/:id", categoryByArticleControllers.read);
// router.post("/category_by_articles", categoryByArticleValidation, categoryByArticleControllers.add);
// router.put("/category_by_articles/:id", categoryByArticleValidation, categoryByArticleControllers.edit);
// router.delete("/category_by_articles/:id", categoryByArticleControllers.destroy);

const categoryControllers = require("./controllers/categoryControllers");
// const categoryValidation = require("./validators/categoryValidation");

router.get("/categorys", categoryControllers.browse);
router.get("/categorys/:id", categoryControllers.read);
// router.post("/categorys", categoryValidation, categoryControllers.add);
// router.put("/categorys/:id", categoryValidation, categoryControllers.edit);
// router.delete("/categorys/:id", categoryControllers.destroy);

const imageByArticleControllers = require("./controllers/imageByArticleControllers");
// const imageByArticleValidation = require("./validators/imageByArticleValidation");

router.get("/image_by_articles", imageByArticleControllers.browse);
router.get("/image_by_articles/:id", imageByArticleControllers.read);
// router.post("/image_by_articles", imageByArticleValidation, imageByArticleControllers.add);
// router.put("/image_by_articles/:id", imageByArticleValidation, imageByArticleControllers.edit);
// router.delete("/image_by_articles/:id", imageByArticleControllers.destroy);

const articleControllers = require("./controllers/articleControllers");
const articleValidation = require("./validators/articleValidation");

router.get("/articles", articleControllers.browse);
router.get("/articles/:id", articleControllers.read);
// router.post("/articles", articleValidation, articleControllers.add);
router.put("/articles/:id", articleValidation, articleControllers.edit);
router.delete("/articles/:id", articleControllers.destroy);

const publisherControllers = require("./controllers/publisherControllers");
// const publisherValidation = require("./validators/publisherValidation");

router.get("/publishers", publisherControllers.browse);
router.get("/publishers/:id", publisherControllers.read);
// router.post("/publishers", publisherValidation, publisherControllers.add);
// router.put("/publishers/:id", publisherValidation, publisherControllers.edit);
router.delete("/publishers/:id", publisherControllers.destroy);

const authorControllers = require("./controllers/authorControllers");
const authorValidation = require("./validators/authorValidation");

router.get("/authors", authorControllers.browse);
router.get("/authors/:id", authorControllers.read);
// router.post("/authors", authorValidation, authorControllers.add);
router.put("/authors/:id", authorValidation, authorControllers.edit);
router.delete("/authors/:id", authorControllers.destroy);

const imageControllers = require("./controllers/imageControllers");
// const imageValidation = require("./validators/imageValidation");

router.get("/images", imageControllers.browse);
router.get("/images/:id", imageControllers.read);
// router.post("/images", imageValidation, imageControllers.add);
// router.put("/images/:id", imageValidation, imageControllers.edit);
router.delete("/images/:id", imageControllers.destroy);

/* ************************************************************************* */

module.exports = router;
