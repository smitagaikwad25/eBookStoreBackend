const USER_INFO_SERVICE = require("../../src/service/userInfo.service");

exports.userDetails = (req, res) => {
    try{
      let response = {}
      var userObj = {
          NAME : req.body.NAME,
          PHONE_NO : req.body.PHONE_NO,
          PIN : req.body.PIN,
          LOCALITYNAME : req.body.LOCALITY,
          ADDRESS : req.body.ADDRESS,
          CITY_TOWN : req.body.CITY_TOWN,
          LANDMARK : req.body.LANDMARK
      }
      USER_INFO_SERVICE.userDetails(userObj, ((err, data) =>{
        if(err){
          response = {
            success:"false",
            message: err,
          }
          res.status(500).send(response);
        }else{
          response = {
            success: "true",
            message: "successfully Details given",
            data: data
          }
          res.status(200).send(response)
        }
      }))
    }
    catch (err) {
      res.status(500).send({ message: "error while storing data"})
    }
  }
  
  