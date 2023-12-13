import usermodel from "./useModel.js";

export function finduser(name) {
  return usermodel.findOne({ where: { name: name } });
}
