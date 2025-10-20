// import fs from "fs";
// import path from "path";

// export default function handler(req, res) {

//   res.setHeader("Access-Control-Allow-Origin", "*");
  
//   res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//   if (req.method === "OPTIONS") {
//     res.status(200).end();
//     return;
//   }

//   const filePath = path.join(process.cwd(), "db", "db.json");
//   const fileContents = fs.readFileSync(filePath, "utf-8");
//   const data = JSON.parse(fileContents);

//   res.status(200).json(data.companies); 
// }


const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const filePath = path.join(process.cwd(), "db", "db.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  res.status(200).json(data.companies);
};
