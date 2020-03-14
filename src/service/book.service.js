const BOOK_MODULE = require("../../src/module/book.module");

exports.create = (bookData, callback) => {
  console.log("In service===>", bookData);

  BOOK_MODULE.create(bookData, function (err, data) {
    if (err) {
      return callback(err);
    }
    console.log("SERVICE RES", typeof data);

    return callback(null, data);
  });
};

exports.searchBook = (bookData, callBack) => {
  BOOK_MODULE.searchBook(bookData, (err, data) => {
    if (err) {
      return callBack(err, null)
    } else if (data !== null) {
      return callBack(null, data)
    }
  })

}

