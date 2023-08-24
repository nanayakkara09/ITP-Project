const router = require("express").Router();
let Employee = require("../models/Employee");

// create
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  const newEmployee = new Employee({
    name,
    age,
    gender,
  });

  newEmployee
    .save()
    .then(() => {
      res.json("Employee added");
    })
    .catch((err) => {
      console.log(err);
    });
});

// read
router.route("/").get((req, res) => {
  Employee.find()
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      console.log(err);
    });
});

// update
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { name, age, gender } = req.body;

  const updateEmployee = {
    name,
    age,
    gender,
  };

  try {
    const update = await Employee.findByIdAndUpdate(userId, updateEmployee);
    res.status(200).send({ status: "User Updated", user: update });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ status: "Error with updating data", error: err.message });
  }
});

// delete
router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  try {
    await Employee.findByIdAndDelete(userId);
    res.status(200).send({ status: "User deleted" });
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .send({ status: "Error with delete user", error: err.message });
  }
});

// find one user data
router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;

  try {
    const user = await Employee.findById(userId);
    res.status(200).send({ status: "User fetched", user: user });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: "Error with get user", error: err.message });
  }
});

module.exports = router;
