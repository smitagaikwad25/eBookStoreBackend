const BOOK_SERVICE = require("../../src/service/book.service");
let response = {};
exports.create = (req, res) => {
  console.log("in controller");
  
  try {
    req.checkBody("TITLE").exists();
    req.checkBody("AUTHOR").exists();
    req
      .checkBody("YEAR")
      .isNumeric()
      .exists();
    req.checkBody("DESCRIPTION").exists();
    req
      .checkBody("RATING")
      .isNumeric()
      .exists();
    req
      .checkBody("PRICE")
      .isNumeric()
      .exists();
    // req.checkBody("NOOFCOUNT").isNumeric();
    // req.checkBody("IMAGEPATH").exists();
    const error = req.validationErrors();
    if (error) {
      console.log("in errorrr");
      
      Response = {
        success: "validetion false"
      };
      res.status(500).send(Response);
    } else {
      // var count = this.NOOFBOOKCOUNT( req.body.TITLE,req.body.AUTHOR);
      // if (count == true) {
      //   Response = {
      //     success: "validetion false"
      //   };
      //   res.status(500).send(Response);
      // } else {

      BOOK_SERVICE.findone({ TITLE: req.body.TITLE }, function(err, data) {
        if (data == true) {
          response = {
            success: false,
            message: "This Book is already in Data Base......"
          };
          res.status(500).send(response);
        } else {
          var bookData = {
            TITLE: req.body.TITLE,
            AUTHOR: req.body.AUTHOR,
            YEAR: req.body.YEAR,
            DESCRIPTION: req.body.DESCRIPTION,
            RATING: req.body.RATING,
            PRICE: req.body.PRICE,
            BOOKSCOUNT: req.body.NOOFBOOKS,
            IMAGEPATH: req.body.IMAGEPATH
          };
          console.log("in controller",bookData);
          

          //}
          BOOK_SERVICE.create(bookData, function(err, data) {
            if (err) {
              response = {
                success: false,
                message: err
              };
              res.status(500).send(response);
            }
            response = {
              success: true,
              data: data
            };
            console.log("in crontoller ------>", data[0]);

            res.status(200).send(data);
          });
        }
      });
    }
  } catch (err) {
    if (err) {
      response = {
        success: "false"
      };
      res.status(500).send(response);
    }
  }
};

exports.getAllBooks = (req, res) => {
  let page = req.body.page
  console.log(req.body.page);
  
  BOOK_SERVICE.getAllBooks(page, function(err, data) {
    if (err) {
      res.status(404).send({
        message: err.message || "Soame Error Occurred While Creating"
      });
    }
    // StartLimit = (page - 1) * 3
    // console.log(StartLimit);
    
    // EndLimit = page*3
    // console.log(EndLimit);
    
    // var books=[]
    // for(var i = StartLimit; i<EndLimit; i++){
    //   books.push(data[i])
    // }
    // console.log("in crontoller ------>", books);
    res.send(data);
  });
};

exports.searchBook = async (req, res) => {

  try {
    req.checkBody("TITLE").exists();
    const error = req.validationErrors();
    const response = {};

    if (error) {
      response.success = false;
      response.message = "enter valid details";
      response.error = error;
      return res.status(500).send(response);
    } else {
      bookData = {
        TITLE: await req.body.TITLE
      };

      BOOK_SERVICE.searchBook(bookData, (err, data) => {
        if (err) {
          response.success = false;
          response.message = "error while getting book data";
          response.err = err;
          return res.status(500).send(response);
        } else {
          response.data = data;
          response.success = true;
          response.message = "successfull done";
          return res.status(200).send(response);
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "error occure " });
  }
};

exports.sortAllBooksByDecPrice = (req, res) => {
  try {
    let response = {};
    BOOK_SERVICE.sortAllBooksByDecPrice({}, (err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err
        };

        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully calculated",
          data: data
        };
        console.log("response--> ", response);
        res.status(200).send(response);
      }
    });
  } catch (err) {
    res.status(500).send({ message: "error while getting obj" });
  }
};

//for sorting books data by ascending order//
exports.sortAllBooksByAscPrice = (req, res) => {
  try {
    let response = {};
    BOOK_SERVICE.sortAllBooksByAscPrice({}, (err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err
        };

        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully calculated",
          data: data
        };
        console.log("response--> ", response);
        res.status(200).send(response);
      }
    });
  } catch (err) {
    res.status(500).send({ message: "error while getting obj" });
  }
};

//for sorting books data by new arrival//
exports.sortAllBooksByNewArrival = (req, res) => {
  try {
    let response = {};
    BOOK_SERVICE.sortAllBooksByNewArrival({}, (err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err
        };

        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully calculated",
          data: data
        };
        res.status(200).send(response);
      }
    });
  } catch (err) {
    res.status(500).send({ message: "error while getting obj" });
  }
};

exports.getCount = (req,res) =>{
  try {
    let response = {};
    BOOK_SERVICE.getCount({}, (err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err
        };

        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully calculated",
          data: data
        };
        res.status(200).send(response);
      }
    });
  } catch (err) {
    res.status(500).send({ message: "error while getting obj" });
  }
}
