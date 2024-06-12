// Import the validateFile function from fileValidator.js
const { validateFile } = require('../src/fileValidator');

// Test cases
test('validates file type', () => {
  const file = { type: 'image/jpeg' };
  const options = { allowedTypes: ['image/jpeg', 'image/png'] };
  expect(validateFile(file, options)).toBeTruthy();
});

test('validates file size', () => {
  const file = { size: 1000 };
  const options = { maxSize: 2000 };
  expect(validateFile(file, options)).toBeTruthy();
});

// Add more tests as needed
