const User = require("../models/user");

const handleGetAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  return res.json(allUsers);
};

const handlePostUser = async (req, res) => {
  const newUser = req.body;
  if (!newUser || !newUser.first_name || !newUser.last_name || !newUser.email) {
    return res
      .status(400)
      .json({ msg: " First Name, Last name and email is required" });
  }
  const result = await User.create({
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    email: newUser.email,
    gender: newUser.gender,
    address: newUser.address,
  });
  return res.status(201).json({ status: "successfully Created", result });
};

const handleGetUserById = async (req, res) => {
  const theUser = await User.findById(req.params.id);
  // const User = users.find((user) => user.id === id);
  return res.json(theUser);
};

const handlePatchUserById = async (req, res) => {
  // const updateUser = req.body;
  const theUser = await User.findByIdAndUpdate(req.params.id, req.body);
  // const User = users.find((user) => user.id === id);
  // const index = users.indexOf(User);
  // if (index > -1) {
  //   // only splice array when item is found
  //   users.splice(index, 1); // 2nd parameter means remove one item only
  // }
  // users.push({ id: id, ...updateUser });
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  return res.send({ status: "successfully Updated" });
  // });
};

const handleDeleteUserById = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.send({ status: "successfully Deleted" });
};

module.exports = {
  handleGetAllUsers,
  handlePostUser,
  handleGetUserById,
  handlePatchUserById,
  handleDeleteUserById,
};
