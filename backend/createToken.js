import jwt from "jsonwebtoken";
export function createToken(user) {
  console.log(user);
  const accessToken = jwt.sign(
    { name: user.name, password: user.password },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
  return accessToken;
}
