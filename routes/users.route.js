const {
  getAllUsers,
  createAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/", createAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
