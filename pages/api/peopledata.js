import * as fs from "fs";

export default function handler(req, res) {
  fs.readdir("database", (err, data) => {
    console.log("shubham", data);
    res.status(200).json([
      {
        id: 1,
        first_name: "Melvin",
        last_name: "Dockreay",
        email: "mdockreay0@imdb.com",
        gender: "Male",
        ip_address: "205.50.96.165",
      },
      {
        id: 2,
        first_name: "Alfred",
        last_name: "Gowdie",
        email: "agowdie1@buzzfeed.com",
        gender: "Male",
        ip_address: "135.245.233.43",
      },
      {
        id: 3,
        first_name: "Deina",
        last_name: "Ceaser",
        email: "dceaser2@xing.com",
        gender: "Female",
        ip_address: "245.33.197.36",
      },
      {
        id: 4,
        first_name: "Parker",
        last_name: "McGettigan",
        email: "pmcgettigan3@ca.gov",
        gender: "Male",
        ip_address: "10.155.213.100",
      },
      {
        id: 5,
        first_name: "Marietta",
        last_name: "Tomkin",
        email: "mtomkin4@gmpg.org",
        gender: "Male",
        ip_address: "32.218.170.104",
      },
    ]);
  });
}
