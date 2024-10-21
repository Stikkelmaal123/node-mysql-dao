// Mocking a database with an array of users
const users = [
  {
    id:    1,
    name:  'John Doe',
    email: 'john@doe.com',
  },
  {
    id:    2,
    name:  'Jane Doe',
    email: 'jane@doe.com',
  },
];

exports.getAllUsers = async () => {
  return users;
};

exports.getUserById = async (id) => {
  return users.find(user => user.id === id);
}

exports.createUser = async (user) => {
  users.push(user);
  return user;
};
