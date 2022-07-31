import { Sequelize } from 'sequelize'
import db from '../config/database.js'

const { DataTypes } = Sequelize

const Product = db.define('barang', {
  id_barang: {
    type: DataTypes.INTEGER
  },
  nama: {
    type: DataTypes.STRING
  }
}, {
  // freezeTableName: true
  initialAutoIncrement: false,
  createdAt: false, 
  updatedAt: false,
  timestamps: false,
})

export default Product