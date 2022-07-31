// Core module
// File System
const fs = require('fs')

// menulis string ke file (synchronous)
// try {
//   fs.writeFileSync('data/test.txt','Hellow world secara synchronous')
// } catch (error) {
  //   console.log(error);
  // } 
  
  // menulis string ke file (Asynchronous)
  // fs.writeFile('data/test.txt','Hello World secara Asynchronous',(e) => {
  //   console.log(e);
  // })
    
    
// membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt','utf-8')  
// console.log(data);

// membaca isi file (Asynchronous)
// fs.readFile('data/test.txt','utf-8',(err,data) => {
//   if (err) throw err
//   console.log(data);
// })

// Readlline
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Masukan nama anda : ', (nama) => {
  rl.question('Masukan no HP anda : ', (nohp) => {
    const contact = {nama,nohp}
    const file = fs.readFileSync('data/contacts.json','utf-8')
    const contacts = JSON.parse(file)
    contacts.push(contact)
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
    console.log('Terimakasih sudah memasukan data');
    rl.close()
  })
})






