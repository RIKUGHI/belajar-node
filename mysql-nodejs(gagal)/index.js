import express from 'express'
import db from './config/database.js'
import productRoutes from './routes/index.js'

const app = express()

try {
  await db.authenticate()
  console.log('Database Connected');
} catch (error) {
  console.log('Database Error: '. error);
}

app.use('/products', productRoutes)

app.listen(5000, () => console.log('Server running at port 5000'))