# Smart Utility Toolkit

This is my lab assignment for Node.js. I made a few small command-line programs that show different Node.js concepts like `process.argv`, file system operations, the `http` module, and custom modules.

## What's inside

- **calculator.js** – a simple calculator that takes two numbers and an operation from the terminal.
- **dice.js** – rolls a dice (1 to 6) using the `crypto` module and saves every roll to `diceHistory.txt`.
- **fileManager.js** – lets you create, read, update, or delete a text file using terminal commands.
- **server.js** – a basic HTTP server with `/`, `/about`, and `/contact` routes.
- **useModule.js** and **app.js** – both use custom modules to check even numbers and log messages.
- **modules/isEven.js** – checks if a number is even.
- **modules/logger.js** – a simple logger function.

## How to run everything

### Calculator
```
node calculator.js add 10 5
node calculator.js subtract 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
```

### Dice Roller
```
node dice.js
```
Every time you run it, it rolls a dice and adds the result to `diceHistory.txt`.

### File Manager
```
node fileManager.js create
node fileManager.js read
node fileManager.js update
node fileManager.js delete
```

### Server
```
node server.js
```
Then open `http://localhost:3000` in the browser. Try `/about` and `/contact` too, and any other route will give a 404.

### Modules
```
node useModule.js
node app.js
```
Both of these just show how you can split code into separate files and import them with `require`.

## Notes

- All these files were made just to practice basic Node.js stuff — argv, fs, crypto, http, and modules.
- Nothing fancy here, just trying to get the fundamentals right before moving to bigger projects.