class ValidationError extends Error {
  constructor(message) {
      super(message);
      this.name = "ValidationError";
  }
}

let json = '{ "age": 30 }';

try {
  let user = JSON.parse(json);

  if (!user.name) {
      throw new ValidationError("'name' is required.");
  }
  if (!user.age) {
      throw new ValidationError("'age' is required.");
  }

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
      console.log(`JSON Syntax Error: ${error.message}`);
  } else if (error instanceof ValidationError) {
      console.log(`Invalid data: ${error.message}`);
  } else if (error instanceof ReferenceError) {
      console.log(error.message);
  } else {
      console.log(error.stack);
  }
}

{/* ============================================= another example ============================================= */}
class ValidationError extends Error {
  constructor(message){
    super(message)
    this.name = 'ValidationError'
  }
}

const validateNumberInput = (a, b, c) => {
  if (typeof a != 'number') throw new ValidationError('Argumen pertama harus number')
  if (typeof b != 'number') throw new ValidationError('Argumen kedua harus number')
  if (typeof c != 'number') throw new ValidationError('Argumen ketiga harus number')
}

const detectTriangle = (a, b, c) => {
  // TODO 3

  try {
    validateNumberInput(a, b, c)
    if (a === b && b === c) {
      return 'Segitiga sama sisi';
    }
  
    if (a === b || a === c || b === c) {
      return 'Segitiga sama kaki';
    }
  
    return 'Segitiga sembarang';
  } catch (error) {
    if(error instanceof ValidationError) {
      return error.message
    } else {
      return error.stack
    }
  }
};

console.log(detectTriangle('',2,3))