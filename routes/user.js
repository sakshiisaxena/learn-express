const express = require('express');
const { handleGetUserById, handleGetAllUser, handleUpdateUserById, handleDeleteUserById, handleCreateUser } = require('../controllers/user');

const router = express.Router();

//Rest Api
router.route("/").get(handleGetAllUser).post(handleCreateUser)

router.route("/:id").
get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)


module.exports = router;