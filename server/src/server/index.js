import Hapi from "hapi";
import Inert from "inert";
import Vision from "vision";
import HapiSwagger from "hapi-swagger";
import "babel-polyfill";
import mongoose from "mongoose";

import routes from "../server/routes";
(async () => {
  const server = await Hapi.server({
    host: "localhost",
    port: 3001
  });

  const database = "mongodb://127.0.0.1:27017/db";

  mongoose.connect(
    database,
    { connectTimeoutMS: 1000 }
  );

  const SwaggerOptions = {
    info: {
      title: "API Documentation",
      version: "1.0",
      contact: { name: "Deepansh Bhargava", email: "deepansh940@gmail.com" }
    }
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: SwaggerOptions
    }
  ]);

  server.route(routes);

  try {
    const db = await mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
      console.log("Mongo is live!");
    });
    await server.start();
    console.log("Server running at:", server.info.uri);
  } catch (err) {
    console.log(err);
  }
})();
