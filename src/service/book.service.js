const BOOK_MODULE = require("../../src/module/book.module");

exports.create = (bookData, callback) => {

  BOOK_MODULE.create(bookData, function(err, data) {
    if (err) {
      return callback(err);
    }

    return callback(null, data);
  });
};


exports.sortAllBooksByDecPrice=(obj, callback)=> {

  BOOK_MODULE.sortAllBooksByDecPrice(obj , (err,data) => {
    if(err){
      return callback(err)
    }
    return callback(null,data)
  })
}


exports.sortAllBooksByAscPrice=(obj, callback)=> {

  BOOK_MODULE.sortAllBooksByAscPrice(obj , (err,data) => {
    if(err){
      return callback(err)
    }
    return callback(null,data)
  })
}


exports.sortAllBooksByNewArrival=(obj, callback)=> {

  BOOK_MODULE.sortAllBooksByNewArrival(obj , (err,data) => {
    if(err){
      return callback(err)
    }
    return callback(null,data)
  })
}