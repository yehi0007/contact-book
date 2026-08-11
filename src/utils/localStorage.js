const CONTACTS_KEY = "contacts";

export function getContacts() {
  return JSON.parse(localStorage.getItem(CONTACTS_KEY)) || [];
}

export function saveContacts(contacts) {
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
}

export function addContact(contact) {
  const contacts = getContacts();
  contact.id = Date.now().toString();
  contacts.push(contact);
  saveContacts(contacts);
  return contact;
}

export function updateContact(updatedContact) {
  const contacts = getContacts();
  const index = contacts.findIndex((c) => c.id === updatedContact.id);
  if (index !== -1) {
    contacts[index] = updatedContact;
    saveContacts(contacts);
  }
  return updatedContact;
}

export function deleteContact(id) {
  const contacts = getContacts().filter((c) => c.id !== id);
  saveContacts(contacts);
}
