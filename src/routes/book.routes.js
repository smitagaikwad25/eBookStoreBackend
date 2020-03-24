module.exports = app => {
  const BOOK_CONTROLLER = require("../controller/book.controller");
  const USER_INFO_CONTROLLER = require("../controller/userInfo.controller");
  var multer = require("multer");
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "./upload/");
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  var upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    }
  });

  app.post("/ebookstore/book", BOOK_CONTROLLER.create);
  app.post("/ebookstore/books", BOOK_CONTROLLER.getAllBooks);
  app.post("/ebookstore/search", BOOK_CONTROLLER.searchBook);
  app.get("/sortBooksLowToHigh", BOOK_CONTROLLER.sortAllBooksByDecPrice);
  app.get("/sortBooksHighToLow", BOOK_CONTROLLER.sortAllBooksByAscPrice);
  app.get("/sortBooksByArrival", BOOK_CONTROLLER.sortAllBooksByNewArrival);
  app.get("/ebookstore/books/count", BOOK_CONTROLLER.getCount);

  app.post("/image", upload.single("filePath"), (req, res, next) => {
    res.send({
      type: "GET",
      url: "http://localhost:3000/" + req.file.path
    });
  });


  app.post("/userDetails", USER_INFO_CONTROLLER.userDetails);

 
};


 