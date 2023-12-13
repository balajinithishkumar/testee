import jwt from "jsonwebtoken";
export async function verifyToken(token) {
  if (!token) return { Error: "User not authenticated!" };
  try {
    const verify_ = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (verify_) {
      return { verified_token: verify_ };
    }
  } catch (err) {
    return { Error: err.message };
  }
}