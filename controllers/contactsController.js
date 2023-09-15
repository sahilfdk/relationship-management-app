const { Contact } = require('../models/Contact'); // Import the Contact model

// Simulated database or storage
const contactsDatabase = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    designation: 'Manager',
    addressedAs: 'Mr. Doe',
    qualifications: ['BSc in Computer Science', 'MBA'],
    experience: ['Software Engineer at ABC Inc', 'Product Manager at XYZ Corp'],
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    address: '456 Elm St',
    designation: 'Engineer',
    addressedAs: 'Ms. Smith',
    qualifications: ['MSc in Electrical Engineering'],
    experience: ['Electrical Engineer at DEF Ltd'],
  },
  // Add more dummy contacts here as needed
];

// Controller functions
function getAllContacts(req, res) {
  res.json(contactsDatabase);
}

function getContactById(req, res) {
  const contactId = parseInt(req.params.id);
  const contact = contactsDatabase.find((c) => c.id === contactId);

  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }

  res.json(contact);
}

function addContact(req, res) {
  const newContact = req.body;
  newContact.id = contactsDatabase.length + 1; // Simulated auto-increment
  contactsDatabase.push(newContact);
  res.status(201).json(newContact);
}

function updateContact(req, res) {
  const contactId = parseInt(req.params.id);
  const updatedContact = req.body;
  const contactIndex = contactsDatabase.findIndex((c) => c.id === contactId);

  if (contactIndex === -1) {
    return res.status(404).json({ message: 'Contact not found' });
  }

  contactsDatabase[contactIndex] = { ...contactsDatabase[contactIndex], ...updatedContact };
  res.json(contactsDatabase[contactIndex]);
}

function deleteContact(req, res) {
  const contactId = parseInt(req.params.id);
  const contactIndex = contactsDatabase.findIndex((c) => c.id === contactId);

  if (contactIndex === -1) {
    return res.status(404).json({ message: 'Contact not found' });
  }

  const deletedContact = contactsDatabase.splice(contactIndex, 1);
  res.json(deletedContact[0]);
}

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  deleteContact,
};
