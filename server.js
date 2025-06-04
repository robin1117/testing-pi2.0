// import express from "express";
// import path from "path";
// const app = express();
// const port = 3000;

// // Middleware to parse JSON request body
// // app.use(express.json());

// // Serve static files (like index.html) from the 'public' folder
// app.use(express.static("public"));

// // Route to receive phrase
// app.post("/submit-phrase", (req, res) => {
//   const phrase = req.body.phrase;
//   console.log("Received phrase:", phrase);

//   res.json({ message: "Phrase received successfully" });
// });

// app.get("/", (req, res) => {
//   const homepage = path.join(import.meta.dirname, "public", "index.html");
//   res.sendFile(homepage);
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Needed for ES Module to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON
app.use(express.json());

// ✅ Serve all static files (HTML, CSS, JS, PNG, etc.)
app.use(express.static(path.join(__dirname, "public")));

// ✅ POST route
app.post("/submit-phrase", (req, res) => {
  const phrase = req.body.phrase;
  console.log("Received phrase:", phrase);
  res.json({ message: "Phrase received successfully" });
});

// ✅ No need for app.get("/") at all!

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
