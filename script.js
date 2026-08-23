const byteSize = (str) => {
  // Create a Blob from the string to get its size in bytes, supporting both ASCII and non-ASCII
  return new Blob([str]).size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));