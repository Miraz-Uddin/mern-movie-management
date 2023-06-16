import { GetProfileInfo, Login } from "../services/UserService.js";

/**
 * Login
 */
export async function login(req, res) {
  try {
    const { id } = req.body;
    const { status, code, message, data } = await Login(id);
    res.status(code).send({ status, message, data });
  } catch (error) {
    console.log(error);
  }
}

/**
 * getProfileData
 */
export async function getProfileData(req, res) {
  try {
    const { status, code, message, data } = await GetProfileInfo(req.user);
    res.status(code).send({ status, message, data });
  } catch (error) {
    console.log(error);
  }
}
