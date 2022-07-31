const { MongoClient, ObjectId } = require('mongodb');


const uri = 'mongodb://127.0.0.1:27017'
const dbName = 'wpu'

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

client.connect((error, client) => {
  if (error) {
    return console.log('Koneksi gagal')
  }

  // pilih database
  const db = client.db(dbName)

  // menambahkan 1 data ke collection mahasiswa
  // db.collection('mahasiswa').insertOne(
  //   {
  //     nama: 'buy one',
  //     email: 'buyone@gmail.com',
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log('Gagal menambahkan data')
  //     }

  //     console.log(result)
  //   }
  // )

  // menambahkan lebih dari 1 data
  // db.collection('mahasiswa').insertMany(
  //   [
  //     {
  //       nama: 'wkwk',
  //       email: 'wkwk@gmail.com'
  //     },
  //     {
  //       nama: 'bjir',
  //       email: 'bjir@gmail.com'
  //     }
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log('data gagal ditambahakan')
  //     }

  //     console.log(result);
  //   }
  // )

  // menampilkan semua data yang ada di collection mahasiswa
  // console.log(db.collection('mahasiswa').find().toArray((error, result) => {
  //   console.log(result);
  // }));

  // menampilkan data berdasarkan kriteria yang ada di collection mahasiswa
  // console.log(db.collection('mahasiswa').find({ _id: ObjectId('612103193c1b456fe0d61883') }).toArray((error, result) => {
  //   console.log(result);
  // }));

  // mengubah data berdasarkan id
  // const updatePromise = db.collection('mahasiswa').updateOne(
  //   {
  //     _id: ObjectId('612103193c1b456fe0d61883')
  //   },
  //   {
  //     $set: {
  //       email: 'buy@yahoo.com'
  //     }
  //   }
  // )

  // updatePromise.then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);
  // })

  // mengubah data lebih dari 1, berdasarkan kriteria
  // db.collection('mahasiswa').updateMany(
  //   {
  //     nama: 'Erik'
  //   },
  //   {
  //     $set: {
  //       nama: 'Erik doang'
  //     }
  //   }
  // )

  // menghapus 1 data
  // db.collection('mahasiswa').deleteOne(
  //   {
  //     _id: ObjectId('612103193c1b456fe0d61883')
  //   }
  // ).then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error)
  // })

  // menghapus lebih dari 1 data 
  db.collection('mahasiswa')
  .deleteMany({
      nama: "wkwk"
  }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error)
  })

})


