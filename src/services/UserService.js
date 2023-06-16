import UserModel from "../models/UserModel.js";
import generateToken from "../utils/token/generateToken.js";

const Model = UserModel;

export async function Registration(reqBody, response) {
  try {
    const data = await Model.create(reqBody);
    response.send({ status: "success", data });
  } catch (error) {
    response.send({
      status: "fail",
      data: error,
    });
  }
}

export async function Login(reqBody, response) {
  try {
    const { email } = reqBody;
    const data = await Model.find({ email }, "email").count();
    if (data === 1 && email) {
      response.send({ status: "success", data: generateToken(email) });
    } else {
      response.send({
        status: "fail",
        data: "Login Failed",
      });
    }
  } catch (error) {
    response.send({
      status: "fail",
      data: error,
    });
  }
}

export async function GetProfileInfo(request, response) {
  try {
    const { email } = request.headers;
    const data = await Model.findOne({ email }, "firstName lastName email");
    response.send({ status: "success", data });
  } catch (error) {
    response.send({
      status: "fail",
      data: error,
    });
  }
}
