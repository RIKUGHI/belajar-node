import express from 'express'
import { getAllProducts } from '../controller/Products.js'

const router = express.Router()

router.get('/', getAllProducts)

export default router