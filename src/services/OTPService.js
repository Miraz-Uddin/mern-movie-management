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
    response.send({ status: "fail", data: error });
  }
}

export async function VerifyOTP(request, response) {
  try {
    const { otp, email } = request.params;
    const acknowledged = await Model.find({ email, otp, status: 0 }).count();
    if (acknowledged === 1) {
      await Model.updateOne({ email, otp, status: 0 }, { status: 1 });
      response.send({ status: "success", data: "Verification Success" });
    } else {
      response.send({ status: "fail", data: "Already Used" });
    }
  } catch (error) {
    response.send({ status: "fail", data: error });
  }
}
