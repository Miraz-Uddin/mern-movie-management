import generateToken from "../utils/token/generateToken.js";

export async function Login(userId) {
  let status = "fail";
  let code = 400;
  let message = "";
  let data = {};

  // Generate a JWT token with the User Payload
  const token = generateToken(userId, process.env.SECRET_KEY);

  if (token) {
    status = "success";
    code = 201;
    message = "Logged In Successful";
    data = { jwt: token, user: { id: userId } };
  }

  return {
    code,
    status,
    message,
    data,
  };
}

export async function GetProfileInfo(user) {
  let status = "fail";
  let code = 400;
  let message = "";
  let data = {};
  if (user) {
    status = "success";
    code = 200;
    message = "User Reached to Protected Route !!";
    data = { user };
  }
  return {
    code,
    status,
    message,
    data,
  };
}
