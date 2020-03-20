const USER_INFO_MODULE = require("../module/userInfo.module");

exports.userDetails = (obj, callback) => {
  USER_INFO_MODULE.create(obj, (err, data) => {
    if (err) {
      return callback(err);
    }
    return callback(null, data);
  });
};
