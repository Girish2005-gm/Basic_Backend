const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/api/users", userController.getAllUsers);
router.get("/api/users/:id", userController.getUserById);
router.post("/api/users", userController.createUser);
router.patch("/api/users/:id", userController.updateUser);
router.delete("/api/users/:id", userController.deleteUser);
router.get("/users", userController.renderUserList);

module.exports = router;
