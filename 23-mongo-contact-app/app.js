const express = require('express')
const exporesLayouts = require('express-ejs-layouts')

require('./utils/db')
const Contact = require('./model/contact')

const app = express()
const port = 3000

// Setup EJS
app.set('view engine', 'ejs')
app.use(exporesLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

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

// HAlaman detail contact
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


