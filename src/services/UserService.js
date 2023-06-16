import UserModel from "../models/UserModel.js";
import generateToken from "../utils/token/generateToken.js";

const Model = UserModel;
const collection = Model.collection.collectionName;

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
    const data = await Model.find(reqBody, "email").count();
    console.log(reqBody.email);
    if (data === 1 && reqBody.email) {
      // Generate a JWT token with the User Payload
      response.send({ status: "success", data: generateToken(reqBody.email) });
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
