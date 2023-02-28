const express = require('express')
const router = express.Router()
const articleContoller = require("../contollers/articleContoller")    ///// IMPORT FROM Contoller

// PATH start with '/articles'

router.get("/", articleContoller.article_index_get);
  
router.post("/",articleContoller.article_post);
  
router.get("/:id",articleContoller.article_details_get);
  
router.delete("/:id", articleContoller.article_delete);

module.exports = router