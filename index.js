const contacts = require("./db");

contacts.getAllContacts();

const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.getAllContacts();
      return console.log(allContacts);
      break;

    default:
      break;
  }
};
