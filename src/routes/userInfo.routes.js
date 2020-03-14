
module.exports = app => {
    const USER_INFO_CONTROLLER = require("../controller/userInfo.controller");
app.post('/userDetails', USER_INFO_CONTROLLER.userDetails)

}