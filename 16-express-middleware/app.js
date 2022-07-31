const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine','ejs')

// Thirdy-party middleware
app.use(expressLayouts)
app.use(morgan('dev'))

// Built-in-middleware
app.use(express.static('public'))

// Aplication level middleware
app.use((req,res,next) => {
  console.log((`Time: ${Date.now()}`));
  next()
})

app.get('/', (req, res) => {
  // res.sendFile('./index.html',{root: __dirname})
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

app.get('/about', (req, res) => {
  // res.sendFile('./about.html',{root: __dirname})
  res.render('about',{
    layout: 'layouts/main-layout',
    title: 'Halaman About'
  })
})

app.get('/contact', (req, res) => {
  // res.sendFile('./contact.html',{root: __dirname})
  res.render('contact',{
    layout: 'layouts/main-layout',
    title: 'Halaman Contact'
  })
})

app.get('/product/:id', (req,res) => {
  res.send(`Product ID : ${req.params.id} <br> Category : ${req.query.category}`)
})

app.use('/', (req,res) => {
  res.status(404)
  res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




// const http = require('http')
// const fs = require('fs')
// const port = 3000
// const renderHTML = (path,res) => {
//   fs.readFile(path,(err,data) => {
//     if (err) {
//       res.writeHead(404)
//       res.write('Error: file not found')
//     } else {
//       res.write(data)
//     }
//     res.end()
//   })
// }

// http.createServer((req,res) => {
//   res.writeHead(200,{
//     'Content-Type': 'text/html'
//   })

//   const url = req.url

//   switch (url) {
//     case '/about':
//       renderHTML('./about.html',res)
//       break;
//     case '/contact':
//       renderHTML('./contact.html',res)
//       break;
//       default:
//       renderHTML('./index.html',res)
//       break;
//   }

//   // if (url == '/about') {
//   //   renderHTML('./about.html',res)
//   // } else if (url == '/contact') {
//   //   renderHTML('./contact.html',res)
//   // } else {
//   //   // res.write('Hello World')
//   //   renderHTML('./index.html',res)
//   // }

// }).listen(port,() => {
//   console.log(`Server is listening on port ${port}...`);
// })