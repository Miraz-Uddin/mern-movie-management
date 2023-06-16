import jwt from "jsonwebtoken";

export default function AuthVerifyMiddleware(req, res, next) {
  const { token } = req.headers;

  if (!token) {
    return res
      .status(404)
      .json({ status: "fail", message: "No Token Provided" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ status: "fail", message: "Unauthorized Token" });
    }
    // save the decoded token payload in the request object for further use
    const email = decoded["data"];
    req.headers.email = email;
    next();
  });
}
