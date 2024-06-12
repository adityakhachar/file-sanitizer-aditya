# File Sanitizer

A versatile npm package for validating and sanitizing files.

## Description

File Sanitizer is a utility library designed to validate and sanitize files based on specific criteria such as file type, size limits, or custom validation rules.

## Installation

To install File Sanitizer using npm, run:

bash
npm install file-sanitizer-aditya


## Usage

You can use the validateFile function to validate files based on specific criteria such as file type and size limits. Here's a basic example:

javascript
const { validateFile } = require('file-sanitizer-aditya');

const file = { type: 'image/jpeg', size: 1000 };
const options = { allowedTypes: ['image/jpeg', 'image/png'], maxSize: 2000 };

try {
  validateFile(file, options);
  console.log('File is valid.');
} catch (error) {
  console.error('File validation failed:', error.message);
}


## API

### validateFile(file, options)

Validates a file based on the provided options.

- file: An object representing the file to be validated. It should contain properties such as type (file type) and size (file size).
- options: An optional object containing validation options, such as allowedTypes (array of allowed file types) and maxSize (maximum file size).

Returns true if the file passes validation, otherwise throws an error with a descriptive message.

## License

This project is licensed under the MIT License.

## Contributing

If you have any ideas, suggestions, or issues, feel free to open an issue or submit a pull request.

---

By using this module, you agree to the terms and conditions of the MIT License.

Happy coding!