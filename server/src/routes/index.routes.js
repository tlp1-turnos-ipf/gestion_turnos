import { Router } from "express";

const indexRouter = Router();

//Route for the main page
indexRouter.get("/", (req, res) => {
  res.render("index");
});

export { indexRouter };
