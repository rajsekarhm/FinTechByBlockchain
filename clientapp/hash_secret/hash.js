import crypt from "crypto-js";

function encryt(password, secretPharse) {
  return crypt.AES.encrypt(
    password.toString(),
    secretPharse.toString()
  ).toString();
}

function verifybyHash() {}

function decrypt(password, secretPharse, secretPharse) {
  return crypt.AES.decrypt(
    password.toString(),
    secretPharse.toString()
  ).toString(crypt.enc.Utf8);
}

export { encryt, verifybyHash, decrypt };
