const averageExams = (valuesExam) => {
  const numberValidation = valuesExam.every(exam => typeof exam === 'number');
  if (!numberValidation) throw Error('please input number');

  const sumValues = valuesExam.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
  return sumValues / valuesExam.length;
};

const isStudentPassExam = (valuesExam, name) => {
  const minValues = 75;
  const average = averageExams(valuesExam);
  
  if (average > minValues) {
      console.log(`${name} pass the exams`);
      return true;
  } else {
      console.log(`${name} fail the exams`);
      return false;
  }
};

function fetchUsername() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('JSUser');
      }, 3000);
  })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
  console.log(`You are logged in as ${value}`);
})
.finally(() => {
  console.log("Welcome!");
})

module.exports = { averageExams, isStudentPassExam };