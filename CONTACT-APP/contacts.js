const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

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

// const tulisPertanyaan = (pertanyaan) => {
//   return new Promise((resolve,reject) => {
//     rl.question(pertanyaan,(nama) => {
//       resolve(nama)
//     })
//   })
// }

const loadContact = () => {
  const file = fs.readFileSync('data/contacts.json','utf-8')
  const contacts = JSON.parse(file)

  return contacts
}

const simpanContact = (nama,email,noHp) => {
  const contact = {nama,email,noHp}
  const contacts = loadContact()

  // cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama)
  if (duplikat) {
    console.log('Contact sudah terdaftar, gunakan nama lain');
    return false
  }

  contacts.push(contact)
  fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
  console.log('Terimakasih sudah memasukan data');
  rl.close()
}

const listContact = () => {
  const contacts = loadContact()
  contacts.forEach((contact,i) => {
    console.log(`${i+1}. ${contact.nama} - ${contact.noHp}`);
    rl.close()
  });
}

const detailContact = (nama) => {
  const contacts = loadContact()

  const contact = contacts.find(contact => contact.nama.toLowerCase() === nama.toLowerCase())

  if (!contact) {
    console.log('Nama tidak ditemukan');
    return false
  }  

  console.log(contact.nama);
  console.log(contact.noHp);
  if (contact.email) {
    console.log(contact.email);
  }
}

const deleteContact = (nama) => {
  const contacts = loadContact()
  const newContacts = contacts.filter(contact => contact.nama.toLowerCase() !== nama.toLowerCase())

  if(contacts.length === newContacts.length){
    console.log('Nama tidak ditemukan')
    return false
  }

  fs.writeFileSync('data/contacts.json',JSON.stringify(newContacts))
  console.log(`data contact ${nama} berhasil dihapus`);
}

module.exports = {simpanContact,listContact,detailContact,deleteContact}