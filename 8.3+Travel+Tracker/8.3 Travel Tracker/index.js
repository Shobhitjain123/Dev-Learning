import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const app = express();
const port = 3000;

let db = new pg.Client({
  user: "postgres",
  host: "localhost",
  password: "sjnn123",
  port: 5432,
  database: "world"
})

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited() {
  let result = await db.query("SELECT country_code FROM visited_countries");
  console.log(result.rows);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code)
  });

  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisited();
  console.log(countries.length);
  res.render("index.ejs", { countries: countries, total: countries.length });
});


app.post("/add", async (req, res) => {
  const country_name = req.body["country"];
  console.log(country_name);
  try {
    const countryCode = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [country_name.toLowerCase()]);
      const country_code = countryCode.rows[0].country_code;
      try {
        await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [country_code]);
        res.redirect("/");
      } catch(err) {
        console.log(err)
        const countries = await checkVisited();
        res.render("index.ejs", {
          countries: countries,
          total: countries.length,
          error: "Country Already Exist, Please try something else!!"
        });
    }
  } catch (err) {
    console.log(err);
    const countries = await checkVisited();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country Do Not Exist, Please try again"
    })
  }

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
