import OTPModel from "../models/OTPModel.js";
import SendEmailUtility from "../utils/email/SendEmailUtility.js";

const Model = OTPModel;
const collection = Model.collection.collectionName;

export async function SendOTP(request, response) {
  try {
    const { email } = request.params;
    const otp = Math.floor(100000 + Math.random() * 900000);
    await Model.create({ email, otp });
    const data = await SendEmailUtility(
      email,
      `Your Verification Code is: ${otp}. Don't Share this code with anyone; Our employees will never ask for the code.`,
      "Verify Movie Management OTP Code"
    );
    response.send({ status: "success", data });
  } catch (error) {
    response.send({
      status: "fail",
      data: error,
    });
  }
}
