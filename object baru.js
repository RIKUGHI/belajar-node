const canSendMessage = self => ({
  sendMessage: () => console.log('send message:', self.message)
});

const checkIsValidPhone = self => ({
  isValid: () => console.log('valid phone', self.from)
});

const personalEnterprise = (from, message, store) => {
  const self = {
    from,
    message,
    store
  };

  const personalEnterpriseBehaviors = self => ({
    createCatalog: () => console.log('Catalog has created: ', self.store)
  });

  return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
// console.log(pe1);
// pe1.createCatalog();
// pe1.sendMessage();

{/* =============================================  ============================================= */}

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const x = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'}
]

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;

    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}

const newNames = arrayMap(names, (name) => `${name}!` );
// const test = arrayMap(x, (id) => id)

// console.log({
//     names,
//     newNames,
//     x,
//     test
// });

{/* =============================================  ============================================= */}
const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

const greatAuthors = books.filter(book => book.sales > 1000000).map(result => `${result.author} adalah penulis buku ${result.title} yang sangat hebat!`)
console.log(greatAuthors);