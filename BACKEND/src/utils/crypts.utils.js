const bcrypt = require('bcrypt');
const uuid = require('uuid4');

const createHash = (password) => {
  let pass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  return pass;
};
const isValid = (passwordEntered, passwordDb) => {
  let decrypt = bcrypt.compareSync(passwordEntered, passwordDb);
  return decrypt;
};
const createCode = (num) => {
  const uuid = uuid();
  const randomCode = uuid.slice(0, num);
  return randomCode;
};

module.exports = { createCode, createHash, isValid };
