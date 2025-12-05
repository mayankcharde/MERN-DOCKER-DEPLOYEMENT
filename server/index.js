import express from "express";
import cors from "cors";

const app = express();

//  this is a middleware to parse the request body as json
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      // add production url
    ],
    credentials: true,
  })
);


//  API ROUTE
app.get("/api/message", (req, res) => {
  res.json({ message: "hello world" });
});

const port = 4000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

//  FOR DOCKER FOR ALL PORTS
app.listen(port, "0.0.0.0", () => {
  console.log(`server is running on port ${port}`);
});
