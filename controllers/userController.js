const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ status: "User not found" });
  res.json(user);
};

exports.createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json({ status: "success", id: newUser._id });
};

exports.updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedUser) return res.status(404).json({ status: "User not found" });
  res.json({ status: "updated successfully", user: updatedUser });
};

exports.deleteUser = async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (!deletedUser) return res.status(404).json({ status: "User not found" });
  res.json({ status: "User deleted" });
};

exports.renderUserList = async (req, res) => {
  const users = await User.find();
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;
  res.send(html);
};
