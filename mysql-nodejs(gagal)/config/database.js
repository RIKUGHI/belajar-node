import { Sequelize } from 'sequelize'

const db = new Sequelize('tcpv2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    freezeTableName: true
  }
})

export default db
