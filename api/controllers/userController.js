import User from "../models/userModel.js";

export const updateDetails = async (req, res) => {
  const { email, phone, password } = req.body;
  try {
    const user = User.findOne({ email }) || User.findOne({ phone });
    if (user) {
      password === user.password;
    }
  } catch (error) {
    console.log(error, "error in login back");
  }
};
