const BOOK_SERVICE = require("../../src/service/book.service");
const BOOK_MODULE = require("../../src/module/book.module");
const CHAI = require("chai");
const EXPECT = CHAI.expect;
const ASSERT = CHAI.assert;
const SINON = require("sinon");

describe("Book Controller", function() {
  it("When Send Book Details Should Return status Code", function() {
    let req = {
      body: {
        TITLE: "Abc",
        AUTHOR: "XUZ",
        YEAR: 1996,
        DESCRIPTION: "SFGHJK",
        RATING: 3.2,
        PRICE: 250
      }
    };
    let bookData = req.body;
    SINON.stub(BOOK_MODULE, "create").yields(null, bookData);
    BOOK_SERVICE.create(bookData, function(err, data) {
      if (err) {
        ASSERT.equal(err, "Error While Storing Book Details..");
      }
      console.log("form service", data);
      ASSERT.equal(data, bookData);
    });
  });
});
