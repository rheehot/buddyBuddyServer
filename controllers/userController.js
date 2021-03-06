const util = require('../modules/utils');
const resMes = require('../modules/responseMessage');
const userService = require('../service/userService');

const readAll = async (req, res) => {
  try {
    const user = await userService.readAll();
    return res.status(200).send(util.success(200, resMes.READ_ALL_USER, user));
  } catch (err) {
    console.log(`user readAll error : ${err}`);
    return res.status(500).send(util.fail(500, resMes.INTERNAL_SERVER_ERROR));
  }
};

const getAllUserCount = async (req, res) => {
  try {
    const userCount = await userService.getUserCount();
    return res.status(200).send(util.success(200, resMes.GET_ALL_USER_CONT, userCount));
  } catch (err) {
    console.log(`user getAllUserCount error : ${err}`);
    return res.status(500).send(util.fail(500, resMes.INTERNAL_SERVER_ERROR));
  }
};

module.exports = {
  readAll,
  getAllUserCount,
};
