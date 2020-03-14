const MONGOOSE = require("mongoose");
const BOOKSCHEMA = MONGOOSE.Schema(
  {
    TITLE: { type: String, require: true },
    AUTHOR: { type: String, require: true },
    YEAR: { type: Number, require: true },
    DESCRIPTION: { type: String, require: true },
    PRICE: { type: Number, require: true },
    RATING: { type: Number, require: true },
    IMAGEURL: { type: String }
  },
  { timestamps: true }
);

const SCHEMABOOK = MONGOOSE.model("book", BOOKSCHEMA);

exports.create = (bookData, callback) => {
  const BOOKDETAILS = new SCHEMABOOK();
  BOOKDETAILS.TITLE = bookData.TITLE;
  BOOKDETAILS.AUTHOR = bookData.AUTHOR;
  BOOKDETAILS.YEAR = bookData.YEAR;
  BOOKDETAILS.DESCRIPTION = bookData.DESCRIPTION;
  BOOKDETAILS.PRICE = bookData.PRICE;
  BOOKDETAILS.RATING = bookData.RATING;
  BOOKDETAILS.IMAGEURL = bookData.IMAGEPATH;



  BOOKDETAILS.save()
    .then(data => {
      callback(null, data);
    })
    .catch(err => {
      callback(
        { message: "Error While Store Book Details in DataBase" },
        null
      );
    });
};

exports.sortAllBooksByDecPrice = (data, callback) => {

  SCHEMABOOK.find({}).sort({ 'PRICE': 1 })
    .then(data => {
      callback(null, data)
    }).catch((err) => {
      callback({ message: "Error While Storing Book Details in DataBase" })
    })

}

exports.sortAllBooksByAscPrice = (data, callback) => {

  // PRICE=data.PRICE;
  SCHEMABOOK.find({}).sort({ 'PRICE': -1 })
    .then(data => {
      callback(null, data)
    }).catch((err) => {
      callback({ message: "Error While Storing Book Details in DataBase" })
    })

}

exports.sortAllBooksByNewArrival = (data, callback) => {

  SCHEMABOOK.find({}).sort({ 'YEAR': -1 })
    .then(data => {
      callback(null, data)
    }).catch((err) => {
      callback({ message: "Error While Storing Book Details in DataBase" })
    })

}

















  // // console.log('scemabook is -------------->',SCHEMABOOK);

  // // var collection = db.collection('book');
  // // console.log('collection is ======>',SCHEMABOOK);


  // // // Add an unique index to title to force errors in the batch insert
  // // collection.find({title:1}, {unique:true}, function(err, indexName) {
  // //   callback(null, indexName);

  // // })



  // SCHEMABOOK.find({$orderby:{PRICE:-1}}){

  //   callback(null, cursor);

  // }
  // // SCHEMABOOK.sort().then(data => {
  // //   callback(null, data);
