const USER_INFO_SERVICE = require("../service/userInfo.service");
let response = {};
exports.userDetails = (req, res) => {
  try {
    req.checkBody("NAME").exists();
    req
      .checkBody("PHONE_NO")
      .isNumeric()
      .exists();
    req
      .checkBody("PIN")
      .isNumeric()
      .exists();
    req.checkBody("LOCALITY").exists();
    req.checkBody("ADDRESS").exists();
    req.checkBody("CITY_TOWN").exists();
    req.checkBody("LANDMARK").exists();
    const error = req.validationErrors();
    if (error) {
      Response = {
        success: "validetion false"
      };
      res.status(500).send(Response);
    } else {
      var userObj = {
        NAME: req.body.NAME,
        PHONE_NO: req.body.PHONE_NO,
        PIN: req.body.PIN,
        LOCALITYNAME: req.body.LOCALITY,
        ADDRESS: req.body.ADDRESS,
        CITY_TOWN: req.body.CITY_TOWN,
        LANDMARK: req.body.LANDMARK
      };
    }
    USER_INFO_SERVICE.userDetails(userObj, (err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err
        };
        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully Details given",
          data: data
        };
        res.status(200).send(response);
      }
    });
  } catch (err) {
    res.status(500).send({ message: "error while storing data" });
  }
};
