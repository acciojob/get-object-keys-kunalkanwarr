//your JS code here. If required.
// Create the student object with a 'name' property
let student = {
  name: "John Doe"
};

// Add the getKeys method to Object.prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Usage: Calling getKeys on the student object
console.log(student.getKeys()); // Output: ["name"]
