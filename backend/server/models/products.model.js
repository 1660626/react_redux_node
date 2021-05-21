const db = require("../utils/db");

module.exports = {
  allWhere() {
    return true;
  },
  all() {
    return true;
  },
  async single(id) {
    return true;
  },

  add(product) {
    return true;
  },

  delete(id) {
    return true;
  },

  update(id, product) {
    return true;
  },
};
