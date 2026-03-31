import "dotenv/config";
import path from "path";
import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import { usersRoutes } from "./routes/users.routes";
import { authRoutes } from "./routes/auth.routes";
import { profileRoutes } from "./routes/profile.routes";
import { uploadRoutes } from "./routes/upload.routes";

const app = express();
const uploadsPath = path.resolve(process.cwd(), "uploads");
const corsOrigin =
  process.env.CORS_ORIGIN ??
  (process.env.NODE_ENV === "development" ? "http://localhost:5173" : undefined);

app.use(
  cors({
    origin: corsOrigin || false,
  })
);
app.use(express.json());
app.use("/uploads", express.static(uploadsPath));

app.get("/health", (req, res) => {
  return res.json({
    status: "ok",
    uptime: process.uptime(),
  });
});

app.use("/users", usersRoutes);
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/upload", uploadRoutes);
app.use(errorHandler);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
