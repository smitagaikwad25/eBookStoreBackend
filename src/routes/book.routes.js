module.exports = app => {
  const BOOK_CONTROLLER = require("../controller/book.controller");
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

  app.post("/Books", BOOK_CONTROLLER.create);
  app.post("/getBooks", BOOK_CONTROLLER.getAllBooks);
  app.post("/searchBook", BOOK_CONTROLLER.searchBook);
  app.get("/sortBooksLowToHigh", BOOK_CONTROLLER.sortAllBooksByDecPrice);
  app.get("/sortBooksHighToLow", BOOK_CONTROLLER.sortAllBooksByAscPrice);
  app.get("/sortBooksByArrival", BOOK_CONTROLLER.sortAllBooksByNewArrival);
  app.get("/getNoOFBookCount", BOOK_CONTROLLER.getCount);

  app.post("/upload", upload.single("filePath"), (req, res, next) => {
    res.send({
      type: "GET",
      url: "http://localhost:3000/" + req.file.path
    });
  });
};
