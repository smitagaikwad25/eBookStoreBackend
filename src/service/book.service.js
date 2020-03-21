const BOOK_MODULE = require("../../src/model/book.model");

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

exports.getAllBooks = (page, callback) => {
  BOOK_MODULE.getAllBooks(page, function(err, data) {
    if (err) {
      callback(err);
    }
    StartLimit = (page - 1) * 12
    console.log(StartLimit);
    
    EndLimit = page*12
    console.log(EndLimit);
    
    var books=[]
    for(var i = StartLimit; i<EndLimit; i++){
      if(data[i] == null){
        break;
      }
      books.push(data[i])
    }
    console.log(books);
    
    callback(null, books);
  });
};

exports.searchBook = (bookData, callBack) => {  
  BOOK_MODULE.searchBook(bookData, (err, data) => {
    if (err) {
      return callBack(err, null);
    } else if (data !== null) {
      return callBack(null, data);
    }
  });
};

exports.updateCount = (data, callBack) => {
  console.log("asfsdh");

  BOOK_MODULE.updateCount(data, (err, data) => {
    if (err) {
      return callBack(err);
    }
    return callBack(null, data);
  });
};

exports.sortAllBooksByDecPrice = (obj, callback) => {
  BOOK_MODULE.sortAllBooksByDecPrice(obj, (err, data) => {
    if (err) {
      return callback(err);
    }
    return callback(null, data);
  });
};

exports.sortAllBooksByAscPrice = (obj, callback) => {
  BOOK_MODULE.sortAllBooksByAscPrice(obj, (err, data) => {
    if (err) {
      return callback(err);
    }
    return callback(null, data);
  });
};

exports.sortAllBooksByNewArrival = (obj, callback) => {
  BOOK_MODULE.sortAllBooksByNewArrival(obj, (err, data) => {
    if (err) {
      return callback(err);
    }
    return callback(null, data);
  });
};

exports.findone = (obj, callback) => {
  console.log("in find one service");
  
  BOOK_MODULE.findone(obj, (err, data) => {
    if (err) {
      return callback(err);
    }
    return callback(null, data);
  });
};

exports.getCount = (obj, callback) => {
  console.log("in find one service");
  
  BOOK_MODULE.getCount(obj, (err, data) => {
    if (err) {
      return callback(err);
    }
    return callback(null, data);
  });
};

