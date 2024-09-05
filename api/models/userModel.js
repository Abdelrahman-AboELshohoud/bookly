import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      validate: {
        validator: function (v) {
          return this.email || v;
        },
        message: "Either phone number or email must be provided.",
        unique: true,
      },
    },
    email: {
      type: String,
      validate: {
        validator: function (v) {
          return this.phone || v;
        },
        message: "Either phone number or email must be provided.",
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
    Verified: {
      type: Boolean,
      default: false,
    },
    location: {
      type: String,
    },
    paymentMethods: {
      type: Array,
      default: [],
    },
    currentMoney: {
      type: Number,
      default: 0,
    },
    inCart: {
      type: Array,
      default: [],
    },
    inProgress: {
      type: Array,
      default: [],
    },
    Delievered: {
      type: Array,
      default: [],
    },
    Canceled: {
      type: Array,
      default: [],
    },
    Loved: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
