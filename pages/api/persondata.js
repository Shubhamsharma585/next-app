import * as fs from "fs";

export default function handler(req, res) {
  fs.readdir("database", (err, data) => {
    console.log("shubham", req.query.idkkk);
    res.status(200).json(data);
  });
}