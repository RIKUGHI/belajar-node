const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;
  if (isCoffeeMakerReady) {
      resolve("Kopi berhasil dibuat");
  } else {
      reject("Mesin kopi tidak bisa digunakan");
  }
}


const makeCoffee = () => {
  return new Promise(executorFunction);
}
const coffeePromise = makeCoffee();
// console.log(coffeePromise);

{/* ============================================= other promises ============================================= */}

const stock = {
  coffeeBeans: 2,
  water: 1000,
}

// const checkStock = () => {
//   return new Promise((resolve, reject) => {
//       if (stock.coffeeBeans >= 16 && stock.water >= 250) {
//           resolve("Stok cukup. Bisa membuat kopi");
//       } else {
//           reject("Stok tidak cukup");
//       }
//   });
// };

const handleSuccess = resolvedValue => {
  console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
  console.log(rejectionReason);
}

// checkStock().then(handleSuccess, handleFailure);

{/* ============================================= other promises ============================================= */}

const state = {
  stock: {
      coffeeBeans: 250,
      water: 1000,
  },
  isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (!state.isCoffeeMachineBusy) {
              resolve("Mesin kopi siap digunakan.");
          } else {
              reject("Maaf, mesin sedang sibuk.");
          }
      }, 1000);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
      state.isCoffeeMachineBusy = true;
      setTimeout(() => {
          if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
              resolve("Stok cukup. Bisa membuat kopi.");
          } else {
              reject("Stok tidak cukup!");
          }
      }, 1500);
  });
};

const boilWater = () => {
  return new Promise((resolve, reject) => {
      console.log("Memanaskan air...");
      setTimeout(() => {
          resolve("Air panas sudah siap!");
      }, 2000);
  })
}

const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
      console.log("Menggiling biji kopi...");
      setTimeout(() => {
          resolve("Kopi sudah siap!");
      }, 1000);
  })
}

const brewCoffee = () => {
  console.log("Membuatkan kopi Anda...")
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Kopi sudah siap!")
      }, 2000);
  });
};

// Chaining Promises
// function makeEspresso() {
//   checkAvailability()
//       .then((value) => {
//           console.log(value);
//           return checkStock();
//       })
//       .then(value => {
//           console.log(value);
//           const promises = [boilWater(), grindCoffeeBeans()];
//           return Promise.all(promises);
//       })
//       .then((value) => {
//           console.log(value)
//           return brewCoffee();
//       })
//       .then(value => {
//           console.log(value);
//           state.isCoffeeMachineBusy = false;
//       })
//       .catch(rejectedReason => {
//           console.log(rejectedReason);
//           state.isCoffeeMachineBusy = false;
//       });
// }

// Chaining Promise using async-await
async function makeEspresso() {
  try {
      await checkAvailability();
      await checkStock();
      await Promise.all([boilWater(), grindCoffeeBeans()]);
      const coffee = await brewCoffee();
      console.log(coffee);
  } catch (rejectedReason) {
      console.log(rejectedReason);
  }
}

// makeEspresso();



/**
 * Ini adalah program untuk mendapatkan nama user dari internet.
 * Terdapat dua fungsi yang sudah dibuat, berikut penjelasanya:
 *   - fetchingUserFromInternet:
 *     - fungsi ini digunakan untuk mendapatkan data user seolah-olah dari internet.
 *     - fungsi ini menerima dua argumen yakni callback, dan isOffline.
 *     - Argumen callback membawa dua nilai yakni error dan user:
 *       - error: NetworkError akan dibawa oleh callback bila isOffline bernilai true.
 *       - user: data user akan dibawa oleh callback bila isOffline bernilai false.
 *   - gettingUserName:
 *      - fungsi ini memanggil fungsi fetchingUserFromInternet dengan nilai isOffline: false untuk mendapatkan data user name dari internet.
 *      - fungsi ini harus mengembalikan nilai user.name, namun sulit karena menggunakan pola callback.
 *      - Maka dari itu, ubahlah fetchingUserFromInternet dari callback menjadi promise
 *      - Dengan begitu, Anda bisa memanfaatkan .then atau async/await untuk mendapatkan user.name.
 *
 * TODO: 1
 * - Ubahlah fungsi fetchingUserFromInternet dengan memanfaatkan Promise. Anda bisa menghapus implementasi callback.
 *
 * TODO: 2
 * - Ubahlah cara mengonsumsi fungsi fetchingUserFromInternet dari callback ke Promise.
 * - Tips:
 *   - Agar penulisan kode lebih bersih dan mudah dibaca, coba manfaatkan async/await
 *
 *
 * Notes:
 * - Jangan ubah struktur atau nilai dari objek user yang dibawa oleh callback sebelumnya.
 * - Tetap gunakan NetworkError untuk membawa nilai error pada Promise
 */

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError';
  }
}

// TODO: 1
const fetchingUserFromInternet = (isOffline) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOffline) {
        reject(new NetworkError('Gagal mendapatkan data dari internet'));
      }
      resolve({ name: 'John', age: 18 });
    }, 500);
  })
};


// TODO: 2
const gettingUserName = async () => {
  try {
    const user = await fetchingUserFromInternet(false)
    return user.name
  } catch (error) {
    console.log(error.message);
  }
};

console.log(gettingUserName())
/**
 * Abaikan kode di bawah ini
 */

// module.exports = { fetchingUserFromInternet, gettingUserName, NetworkError };

