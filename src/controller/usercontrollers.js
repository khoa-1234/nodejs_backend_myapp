import userServices from "../services/user_services";
let handeLogin = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  if (!username || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter",
    });
  }
  let userData = await userServices.handleUserLogin(username, password);
  return res.status(200).json({
    userData,
    errCode: userData.errCode,
    message: userData.errMessage,
  });
};
module.exports = {
  handeLogin: handeLogin,
};
