var express = require('express');
var router = express.Router();

var Article =  require('../models/article');

//GET All Articles
router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles){
    if(err){
      console.log(err);
    }
    res.json(articles)
  });
});

//GET Artlcle Show
router.get('/:id', function(req, res, next) {
  Article.getArticleById(req.params.id, function(err, article){
    if(err){
      console.log(err);
    }
    res.json(article)
  });
});

//
router.get('/category/:category', function(req, res, next) {
  Article.getArticlesByCategory(req.params.category, function(err, articles){
    if(err){
      console.log(err);
    }
    res.json(articles)
  });
});


router.post('/', function(req, res, next){
  //Get From Values
  var title = req.body.title;
  var category = req.body.category;
  var body = req.body.body;

  //Article Object
  var newArticle = new Article({
    title: title,
    category: category,
    body: body,
  });

  //Create Article
  Article.createArticle(newArticle, function(err, article){
    if(err){
      console.log(err);
    }
    res.location('/articles');
  });
});

router.put('/', function(req, res, next){
  var id = req.body.id;
  var data = {
    title: req.body.title,
    category: req.body.category,
    body: req.body.body
  };
  //Create Article
  Article.updateArticle(id, data, function(err, article){
    if(err){
      console.log(err);
    }
    res.location('/articles');
    res.redirect('/articles');
  });
});

router.delete('/:id', function(req, res, next){
  var id = req.params.id;

  //Remove Article
  Article.removeArticle(id, function(err, article){
    if(err){
      console.log(err);
    }
    res.location('/articles');
    res.redirect('/articles');
  })
});

module.exports = router;