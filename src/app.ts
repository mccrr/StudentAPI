import express from "express";
import { json, urlencoded } from "body-parser";
import router from "./routers";

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/", router);

export default app;