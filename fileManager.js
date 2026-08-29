const fs = require("fs");

const fileName = "test.txt";


// CREATE FILE
function createFile() {

    fs.writeFile(fileName, "Hello,This is fileManager", (err) => {

        if (err) {
            console.log("Error creating file");
            return;
        }

        console.log("File created successfully.");

    });

}


// READ FILE
function readFile() {

    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log("File content: ", data);

    });

}


// UPDATE FILE
function updateFile() {

    fs.appendFile(fileName, "\nThis is updated content.", (err) => {

        if (err) {
            console.log("Error updating file");
            return;
        }

        console.log("\nNow the file has been updated.");

    });

}


// DELETE FILE
function deleteFile() {

    fs.unlink(fileName, (err) => {

        if (err) {
            console.log("Error deleting file");
            return;
        }

        console.log("File deleted successfully.");

    });

}


const operation = process.argv[2];



if (operation == "create") {

    createFile();

}

else if (operation == "read") {

    readFile();

}

else if (operation == "update") {

    updateFile();

}

else if (operation == "delete") {

    deleteFile();

}

else {

    console.log("Invalid operation.");
    console.log("Use:");
    console.log("node fileManager.js create");
    console.log("node fileManager.js read");
    console.log("node fileManager.js update");
    console.log("node fileManager.js delete");

}



// run: node fileManager.js create