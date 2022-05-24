import express  from "express";
import { createDirectory } from "../controllers/createDirectoryControllers.js";

const router = express.Router();

// router.route('/createFile').get(createFile);   
router.post('/createDirectory', createDirectory);

export default router;

