import db from "../models/index";
import bcrypt from "bcryptjs";
let handleUserLogin = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUsername(username);
      if (isExist) {
        let user = await db.User.findOne({
          where: { username: username },
        });
        if (user) {
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "OK";
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = "your username not found";
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = "your username exist in your system";
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUsername = (username) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { username: username },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  handleUserLogin: handleUserLogin,
};
