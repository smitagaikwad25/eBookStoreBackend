const BOOK_MODULE = require("../../src/module/book.module");

exports.create = (bookData, callback) => {
  console.log("In service===>", bookData);

  BOOK_MODULE.create(bookData, function(err, data) {
    if (err) {
      return callback(err);
    }
    console.log("SERVICE RES", typeof data);

    return callback(null, data);
  });
};
