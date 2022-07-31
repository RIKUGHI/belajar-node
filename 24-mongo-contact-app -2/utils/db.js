const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/wpu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

// // Menambah 1 data
// const contact1 = new Contact({
//   nama: 'Doddy Cuy',
//   nohp: '54321',
//   email: 'doddycuy@gmail.com'
// })

// // Simpan ke collections
// contact1.save().then((contact) => console.log(contact))




