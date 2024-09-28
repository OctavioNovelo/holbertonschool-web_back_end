const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file content synchronously
    const data = fs.readFileSync(path, 'utf-8').trim();

    // Split data into lines and remove any empty lines
    const lines = data.split('\n').filter(line => line !== '');
    
    // If there are no students in the file, handle that case
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Get the headers and the data (ignore the headers)
    const headers = lines[0].split(',');
    const students = lines.slice(1);

    // Total number of students
    console.log(`Number of students: ${students.length}`);

    // Create an object to group students by field
    const fields = {};

    students.forEach((student) => {
      const studentData = student.split(',');
      const firstName = studentData[0];
      const field = studentData[3]; // Assuming the field is in the 4th column
      
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    // Print the number of students per field and their names
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
