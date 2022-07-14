export const studentsBirthDays = (students) => {
  const month = ['Jan', 'Feb','Mar', 'April','May', 'Jun', 'Jul','Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  console.log(month[new Date(students[0].birthDate).getMonth()]);
  return [...students]
    .map(student => student.month[new Date(student.birthDate).getMonth()] = new Date(student.birthDate).getDate());
}

const listOfStudents = [{ name: 'Tom', birthDate: '01/15/2010' }, { name: 'Bob', birthDate: '01/18/2010' }, { name: 'Bill', birthDate: '02/15/2010' }, { name: 'Jane', birthDate: '03/15/2010' }];
console.log(studentsBirthDays(listOfStudents))