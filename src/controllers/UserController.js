import { SendOTP } from "../services/OTPService.js";
import {
  GetProfileInfo,
  Login,
  Registration,
} from "../services/UserService.js";

/**
 * Register
 */
export async function register(req, res) {
  try {
    await Registration(req.body, res);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Login
 */
export async function login(req, res) {
  try {
    await Login(req.body, res);
  } catch (error) {
    console.log(error);
  }
}

/**
 * getProfileData
 */
export async function getProfileData(req, res) {
  try {
    await GetProfileInfo(req, res);
  } catch (error) {
    console.log(error);
  }
}

/**
 * OTP Send
 */
export async function sendVerificationOTP(req, res) {
  try {
    await SendOTP(req, res);
  } catch (error) {
    console.log(error);
  }
}
