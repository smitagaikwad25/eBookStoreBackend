const BOOK_SERVICE = require("../../src/service/book.service");
let response = {};
exports.create = (req, res) => {
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
    req.checkBody("IMAGEPATH").exists();
    const error = req.validationErrors();
    if (error) {
      Response = {
        success: "validation false"
      };
      res.status(500).send(Response);

    } else {
      var bookData = {
        TITLE: req.body.TITLE,
        AUTHOR: req.body.AUTHOR,
        YEAR: req.body.YEAR,
        DESCRIPTION: req.body.DESCRIPTION,
        RATING: req.body.RATING,
        PRICE: req.body.PRICE,
        IMAGEPATH: req.body.IMAGEPATH
      };
      BOOK_SERVICE.create(bookData, function (err, data) {
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
        res.status(200).send(data);
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
},


  //for sorting books data by descending order//
  exports.sortAllBooksByDecPrice = (req, res) => {
    try {
      let response = {}
      BOOK_SERVICE.sortAllBooksByDecPrice({}, ((err, data) => {
        if (err) {
          response = {
            success: "false",
            message: err,
          }

          res.status(500).send(response);
        } else {
          response = {
            success: "true",
            message: "successfully calculated",
            data: data
          }
          console.log("response--> ", response);
          res.status(200).send(response)
        }
      }))
    }
    catch (err) {
      res.status(500).send({ message: "error while getting obj" })
    }
  }


  //for sorting books data by ascending order//
exports.sortAllBooksByAscPrice = (req, res) => {
  try {
    let response = {}
    BOOK_SERVICE.sortAllBooksByAscPrice({}, ((err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err,
        }

        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully calculated",
          data: data
        }
        console.log("response--> ", response);
        res.status(200).send(response)
      }
    }))
  }
  catch (err) {
    res.status(500).send({ message: "error while getting obj" })
  }
}

//for sorting books data by new arrival//
exports.sortAllBooksByNewArrival = (req, res) => {
  try {
    let response = {}
    BOOK_SERVICE.sortAllBooksByNewArrival({}, ((err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err,
        }

        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully calculated",
          data: data
        }
        res.status(200).send(response)
      }
    }))
  }
  catch (err) {
    res.status(500).send({ message: "error while getting obj" })
  }
}
