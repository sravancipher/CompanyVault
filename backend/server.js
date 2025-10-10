
// const express = require("express");
// const cors = require("cors");
// const fs = require("fs");



import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/companies", (req, res) => {
  fs.readFile("./companies.json", "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read file" });
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => console.log(`✅ Server http://localhost:${PORT}`));
