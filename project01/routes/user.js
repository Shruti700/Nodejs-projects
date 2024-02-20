const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handlePostUser,
  handleGetUserById,
  handlePatchUserById,
  handleDeleteUserById,
} = require("../controllers/user");
//Routes

router.get("/users", async (req, res) => {
  const allUsers = await User.find({});
  const doc = `<ul>
      ${allUsers.map((user) => `<li>${user.email}</li>`).join("")}
      </ul>`;
  res.send(doc);
});

//REST API POINTS
router
    .route("/api/users")
    .post(handlePostUser)
    .get(handleGetAllUsers);

router
  .route("/api/users/:id")
  .get(handleGetUserById)
  .patch(handlePatchUserById)
  .delete(handleDeleteUserById);

module.exports = router;
