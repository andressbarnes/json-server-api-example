const casual = require('casual');

module.exports = () => {
  let data = { users: [], departments: [] };

  //create department names
  const depNames = [
    'Marketing',
    'Product',
    'Sales',
    'Accounting',
    'Engineering',
  ];

  //define department info
  casual.define('department', (id) => {
    return {
      id: id,
      name: depNames[id],
    };
  });

  //user count
  const userCount = 500;

  casual.define('user', (id) => {
    return {
      id: id,
      email: casual.email,
      firstName: casual.first_name,
      lastName: casual.last_name,
      uuid: casual.uuid,
      departmentId: casual.integer((from = 0), (to = depNames.length)),
      color: casual.rgb_hex,
    };
  });

  //add users to the data
  for (let i = 0; i < userCount; i++) {
    data.users.push(casual.user(i));
  }

  //add departments to the data
  for (let i = 0; i < depNames.length; i++) {
    data.departments.push(casual.department(i));
  }

  return data;
};
