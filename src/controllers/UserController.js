const UserModel = require('../models/UserModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    res.render('index', { users });
  } catch(e) {
    console.log(e);
    res.status(500).send('Internal Server Error');
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, age, height } = req.body;
    const users = await UserModel.createUser({ name, email, age, height });
    res.redirect('/');
  } catch(e) {
    console.log(e);
    res.status(500).send('Internal Server Error');
  }
};
