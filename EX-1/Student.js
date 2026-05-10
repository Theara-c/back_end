import fs from "fs";
const filePath = "./hello.txt";

// Write to a file (synchronously)
fs.writeFile(filePath, "Hello, Node.js beginner!", (err) => {
  if (err) {
    console.log(err);
  }
});

// Read the file (synchronously)
const content = fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log("File content:", content);

