const db = require('../config/db.js');


exports.getAllUsers = async () => {
  const [rows, fields] = await db.query('SELECT id, name, email, age, height FROM Users');
  return rows;
};

exports.getUserById = async (id) => {
};

exports.createUser = async (user) => {
  const [result] = await db.execute(`
    INSERT INTO Users 
    (name, email, age, height) 
    VALUES
    (?,?,?,?);
    `, [user.name, user.email, user.age, user.height]);
  return result;
};
