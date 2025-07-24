import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: `/.env`,
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
    app.on("error", (err) => {
      console.error("Server error:", err);
    });
  })
  .catch((error) => {
    console.log("MONGO DB CONNECTION FAILED:", error);
  });
