function validateFile(file, options = {}) {
    const { allowedTypes = [], maxSize = 0 } = options;
  
    // Check if file exists
    if (!file) {
      throw new Error('No file provided');
    }
  
    // Check if file type is allowed
    if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
      throw new Error('File type not allowed');
    }
  
    // Check if file size exceeds the maximum limit
    if (maxSize > 0 && file.size > maxSize) {
      throw new Error('File size exceeds the maximum limit');
    }
  
    // Custom validation rules can be added here
    // For example, check image dimensions, validate file content, etc.
  
    // If all validation checks pass, return true indicating the file is valid
    return true;
  }

  module.exports = { validateFile };
  