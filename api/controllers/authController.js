import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerAccount = async (req, res, next) => {
  console.log(req.body, "register back");
  const { username, email, phone, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    phone,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.status(201).json("User Created Successfully");
  } catch (error) {
    next(error);
  }
};

export const loginAccount = async (req, res, next) => {
  console.log(req.body, "login back");

  const { email, phone, password } = req.body;
  const findThis = email ? { email } : { phone };
  try {
    const validUser = await User.findOne(findThis);
    if (!validUser) return res.status(404).json("Login Failed");
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return res.status(404).json("Wrong Password");
    console.log("hey");
    const token = jwt.sign({ id: validPassword._id }, process.env.SECRET_TOKEN);
    const { password: pass, ...rest } = validUser._doc;
    console.log(validUser._doc, "meow");

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (err) {
    next(err);
  }
};

export const signout = async (req, res, next) => {
  console.log(req, "medsdow");
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has logged out!");
  } catch (error) {
    next(error);
  }
};
