const yargs = require("yargs");
const { simpanContact,listContact,detailContact,deleteContact } = require("./contacts");

yargs.command(
  {
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
      nama: {
        describe: 'Nama Lengkap',
        demandOption: true,
        type: 'string '
      },
      email: {
        describe: 'Email',
        demandOption: false,
        type: 'string '
      },
      noHp: {
        describe: 'Nomer Hp',
        demandOption: true,
        type: 'string '
      }
    },
    handler(argv){
      simpanContact(argv.nama,argv.email,argv.noHp)
    }
  }
).demandCommand()

// menampilkan daftar semua contact
yargs.command({
  command: 'list',
  describe: 'Menampilkan semua nama dan no Hp contact',
  handler(){
    listContact()
  }
})

// menampilkan detail sebuat contact
yargs.command({
  command: 'detail',
  describe: 'Menampilkan detail sebuat contact berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama Lengkap',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    detailContact(argv.nama)
  }
})

// mengapus contact berdasarkan nama
yargs.command({
  command: 'delete',
  describe: 'Menghapus sebuah contact berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama Lengkap',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    deleteContact(argv.nama)
  }
})

yargs.parse()

// const {tulisPertanyaan,simpanContact} = require('./contacts')

// const main = async () => {
//   const nama = await tulisPertanyaan('Masukan nama anda : ')
//   const email = await tulisPertanyaan('Masukan email anda : ')
//   const noHp = await tulisPertanyaan('Masukan no hp anda : ')

//   simpanContact(nama,email,noHp)
// }

// main()

// rl.question('Masukan nama anda : ', (nama) => {
//   rl.question('Masukan no HP anda : ', (nohp) => {
//     const contact = {nama,nohp}
//     const file = fs.readFileSync('data/contacts.json','utf-8')
//     const contacts = JSON.parse(file)
//     contacts.push(contact)
//     fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
//     console.log('Terimakasih sudah memasukan data');
//     rl.close()
//   })
// })   