var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Post = new Schema({
  email: String,
  post: String,
  idPoster: String,
});
module.exports = mongoose.model("posts", Post);
