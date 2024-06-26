// Import React and useState hook (not used in plain JavaScript)
// const React = require('react');
// const { useState } = React;

// Import the validateFile function from fileValidator.js
const validateFile = require('./fileValidator');

// Simulate useState hook
let selectedFile = null;

// Simulate options object
const options = { allowedTypes: ['image/jpeg', 'image/png'], maxSize: 2000 };

// Simulate handleFileChange function
const handleFileChange = (file) => {
  selectedFile = file;
};

// Simulate handleFileUpload function
const handleFileUpload = () => {
  if (selectedFile) {
    try {
      validateFile(selectedFile, options);
      console.log('File is valid.');
    } catch (error) {
      console.error('File validation failed:', error.message);
    }
  } else {
    console.error('No file selected.');
  }
};

// Simulate event object for handleFileChange
const event = {
  target: {
    files: [{ type: 'image/jpeg', size: 1500 }] // Example file object
  }
};

// Simulate file upload scenario
handleFileChange(event.target.files[0]);
handleFileUpload();
