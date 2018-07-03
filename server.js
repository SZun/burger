import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));
import exphbs from "express-handlebars";

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

import routes from "./controllers/burgersController.js";

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);


app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
