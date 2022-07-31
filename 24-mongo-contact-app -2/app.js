const express = require('express')
const exporesLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

require('./utils/db')
const Contact = require('./model/contact')

const app = express()
const port = 3000

// Setup EJS
app.set('view engine', 'ejs')
app.use(exporesLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Setup method override
app.use(methodOverride('_method'))

// HAlama Home
app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'Bambang Kentolet',
      email: 'bambang@gmail.com'
    },
    {
      nama: 'Sukino Kentolet',
      email: 'sukino@gmail.com'
    },
    {
      nama: 'dul Kentolet',
      email: 'dul@gmail.com'
    }
  ]

  res.render('index',{
    nama: 'Bambang Pro',
    title: 'Home',
    mahasiswa,
    layout: 'layouts/main-layout'
  })
})

// Halaman About
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Halaman About',
    layout: 'layouts/main-layout'
  })
})

// Halaman Contact
app.get('/contact', async (req, res) => {
  // Contact.find().then(contact => {
  //   res.send(contact)
  // })

  const contacts = await Contact.find()

  res.render('contact', {
    title: 'Halaman Contact',
    layout: 'layouts/main-layout',
    contacts
  })
})

// Halaman form tambah data contact
app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    title: 'Form Tambah Data Contact',
    layout: 'layouts/main-layout'
  })
})

// Proses Tambah Data Contact
app.post('/contact', (req, res) => {
  Contact.insertMany(req.body, (error, result) => {
    console.log("Error : "+error);
    console.log("Result : "+result);
  })
  res.redirect('/contact')
})

// Proses Delete Contact
// app.get('/contact/delete/:nama', async (req, res) => {
//   const contact = await Contact.findOne({ nama: req.params.nama })
//   if (!contact) {
//     res.status(404)
//     res.send('<h1>404</h1>')
//   } else {
//     Contact.deleteOne({ _id: contact._id }).then((results) => {
//       res.redirect('/contact')
//     })
//   }
// })
app.delete('/contact', (req, res) => {
  Contact.deleteOne({ nama: req.body.nama }).then((result) => {
    res.redirect('/contact')
  })
})

// halaman form edit data contact
app.get('/contact/edit/:nama', async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama })

  res.render('edit-contact', {
    title: 'Form Ubah Data Contact',
    layout: 'layouts/main-layout',
    contact
  })
})

// proses ubah data
app.put('/contact', (req, res) => {
  Contact.updateOne(
    { _id: req.body._id },
    {
      $set: {
        nama: req.body.nama,
        email: req.body.email,
        nohp: req.body.nohp
      }
    }
  ).then((result) => {
    res.redirect('/contact')
  }).catch(err => console.log(err))

})

// Halaman detail contact
app.get('/contact/:nama', async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama })

  res.render('detail', {
    title: 'Halaman Detail',
    layout: 'layouts/main-layout',
    contact
  })
})

app.listen(port, () => {
  console.log(`Mongo Contact App | listening at http://localhost:${port}`)
})


