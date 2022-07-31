const fs = require('fs')

// membuat folder data jika belum ada
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath)
}

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json'
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath,'[]','utf-8')
}

// ambil semua data di contact.json
const loadContact = () => {
  const file = fs.readFileSync('data/contacts.json','utf-8')
  const contacts = JSON.parse(file)

  return contacts
}

// cari contact berdasarkan nama
const findContact = (nama) => {
  const contacts = loadContact()
  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
  return contact
}

// menuliskan / menimpa file contacts.json dengan data yang baru
const saveContact = (contacts => {
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
})

// menambahkan data contact baru
const addContact = (contact) => {
  const contacts = loadContact()
  contacts.push(contact)
  saveContact(contacts)
}

const deleteContact = (nama) => {
  const contacts = loadContact();
  const filteredContacts = contacts.filter(contact => contact.nama !== nama)
  saveContact(filteredContacts)
}

const updateContacts = (contactBaru) => {
  const contacts = loadContact();
  //  hilangkan contact lama yang namanya sama dengan oldNama
  const filteredContacts = contacts.filter(contact => contact.nama !== contactBaru.oldNama)
  delete contactBaru.oldNama
  filteredContacts.push(contactBaru)
  saveContact(filteredContacts)
}

module.exports = { loadContact, findContact, addContact, deleteContact, updateContacts }