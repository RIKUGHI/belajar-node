const validator = require('validator')
const chalk = require('chalk')

// console.log(validator.isEmail('bambang@gmail.com'));
// console.log(validator.isMobilePhone('082345678','id-ID'));
// console.log(validator.isNumeric('082345678'));

// console.log(chalk.black.bgBlue('Hello World'))
// console.log(chalk.italic('Hello World'));
const pesan = chalk`lorem, bambang {bgRed beli} sapi bro`
console.log(pesan);