const { hashPassword, checkPassword } = require("../../uti/handlePassword");
const User = require("../models/User");
// const { multipleMongooseToObject } = require('../../uti/mongoose');

class userController {
  // [GET] /users/register
  getRegister(req, res, next) {
    const message = req.flash("message");
    return res.render("users/register", { message: message[0] });
  }

  async createUser(req, res, next) {
    const { username, password, confirmPassword } = req.body;
    let hashedPassword;
    try {
      if (confirmPassword === password) {
        hashedPassword = await hashPassword(password);
        delete req.body.confirmPassword;
      } else {
        req.flash("message", "Password and confirm password not match");
        return res.redirect("/users/register");
      }
      const userExist = await User.findOne({ username });
      if (userExist) {
        req.flash("message", "Username already exist");
        return res.redirect("/users/register");
      }
      await new User({
        ...req.body,
        password: hashedPassword,
      }).save();
      const user = await User.find();
      req.flash("message", "User created successfully");
      return res.redirect("/users/register");
    } catch (error) {}
  }

  getLogin(req, res, next) {
    const message = req.flash("message");
    return res.render("users/login", { message: message[0] });
  }
  
  async loginUser(req, res, next) {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (user) {
        const isCorrect = await checkPassword(password, user.password);
        if (isCorrect) {
          req.session.user = user;
          return res.redirect("/");
        }
      }
      req.flash("message", "Sai tên tài khoản hoặc mật khẩu");
      return res.redirect("/users/login");
    } catch (error) {
      throw error;
    }
  }

  logoutUser(req, res, next) {
    req.session.destroy((err) => {
      if (err) throw err;
      res.redirect("/users/login");
    });
  }
}

module.exports = new userController();
