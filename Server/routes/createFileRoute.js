import express  from "express";
import { createFile } from "../controllers/createFileControllers.js";


const router = express.Router();

// router.route('/createFile').get(createFile);   
router.post('/createFile', createFile);

export default router;

