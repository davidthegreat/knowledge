var mongoose  = require('mongoose');

var categorySchema = mongoose.Schema({
  title: {
    type: String,
    index: true,
    require: true
  },
  description:{
    type: String
  }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

// Get All Articles
module.exports.getCategories = function(callback){
  Category.find(callback)
}

//Get Article By ID
module.exports.getCategoryById = function(id, callback){
  Category.findById(id, callback);
}

//Get category article
module.exports.createCategory = function(newCategory, callback){
  newCategory.save(callback);
}
