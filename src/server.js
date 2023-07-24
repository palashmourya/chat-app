import express from "express";
import bodyParser from "body-parser";
import * as admin from "firebase-admin";
import firebaseCredentials from "./firebase-credentials.json";
import cors from "cors";
import { protectRoute, routes } from "./routes";
import { database } from "./database";

admin.initializeApp({ credential: admin.credential.cert(firebaseCredentials) });
const app = express();
app.use(cors());
app.use(bodyParser.json());

//register routes
// app.get("./users", async (req, res) => {});
routes.forEach((route) => {
  app[route.method](route.path, protectRoute, route.requestProcessor);
});

const start = async () => {
  await database.connect("mongodb://127.0.0.1:27017");
  app.listen(8080, () => {
    console.log("Server started on port 8080");
  });
};
start();
