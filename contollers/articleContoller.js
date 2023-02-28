
const Article = require("../models/articleSchema");         /// TO IMPORT Schema & Models

const article_index_get = (req, res) => {
    //res.render("index", { mytitle: "HOME" });
  
    // Result = Array of objects indside mongo dataBase
    Article.find()
      .then((result) => {
        res.render("index", { mytitle: "HOME", arrArticle: result });
      })
      .catch((err) => {
        console.log(err);
      });
  }

const article_post = (req, res) => {
    const article = new Article(req.body);
  
    console.log(req.body);
  
    article
      .save()
      .then((result) => {
        res.redirect("/articles");
      })
      .catch((err) => {
        console.log(err);
      });
  }

const article_details_get = (req, res) => {
    /*res.render("details",{ mytitle: "Article details"})
    /////////// result =   object  inside mongo database//////////*/
  
    Article.findById(req.params.id)
      .then((result) => {
        res.render("details", { mytitle: "Article details", objArticle: result });
      })
      .catch((err) => {
        console.log(err);
      });
  }

const article_delete = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
      .then((params) => {  res.json(   {mylink: "/articles"}   )  })
      .catch((err) => {console.log(err);});
  }

  module.exports = {
    article_index_get, article_post, article_details_get, article_delete
  }