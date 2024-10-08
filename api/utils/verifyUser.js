import { errorHandler } from "./error";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(401, "Unauthorized"));
  jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
    if (err) return next(errorHandler(403, "forbidden"));
    req.user = user;
    next();
  });
};
