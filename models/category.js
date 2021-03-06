var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	name : {
		type : String,
		index : true,
		required : true
	},
	description : {
		type : String,
		index : true,
		required : true
	}

});

var Category = module.exports = mongoose.model('Category', categorySchema);

//get all articles
module.exports.getCategories = function(callback){
	Category.find(callback);
}

//get article by id
module.exports.getCategoryById = function(id, callback){
	Category.findById(id, callback);
}

module.exports.createCategory = function(newCategory, callback){
	newCategory.save(callback);
}
//get category Article
module.exports.getArticleByCategory = function(category, callback){
	var query = {category : category};
	Article.find(query, callback);
}
