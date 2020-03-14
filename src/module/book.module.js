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
        { message: "Error While Storeing Book Deatils in DataBase" },
        null
      );
    });
};

exports.searchBook = (bookData, callback) => {
  SCHEMABOOK.find({ 'TITLE': { $regex: bookData.TITLE, $options: 'i' } }, (err, data) => {
    if (err) {
      return callback(err, null)
    }
    else {
      return callback(null, data)
    }
  });

}

