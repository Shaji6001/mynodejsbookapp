var mongoose=require('mongoose');


const bookSchema = new mongoose.Schema({
    bookTitle:{type:String},
    bookPrice:{type:Number},
    bookAuthor:{type:String},
    bookDescription:{type:String}
}
);

var bukModel = mongoose.model("books",bookSchema);

module.exports={bukModel}