import express from "express";
import { downloadImage, uploadImage } from "../controller/controller.js";
import { connectDb } from "../database/data.js";
import upload from "../utils/upload.js";
connectDb();
const router = express.Router();


router.post("/upload",upload.single("file"), uploadImage);
router.get("/file/:fileId",downloadImage);

export default router;