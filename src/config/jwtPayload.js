const jwtPayload = {
  exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
};
export default jwtPayload;
