import jwt from "jsonwebtoken";

export default function generateToken(email) {
  const Payload = {
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
    data: email,
  };
  return jwt.sign(Payload, process.env.SECRET_KEY);
}
