import express from 'express';

//to link controller
import * as ContactController from '../controller/conatct.controller.js';

const router = express.Router();

router.post("/save",ContactController.save);

// router.get("/fetch",ContactController.fetch);

// router.delete("/delete",ContactController.deleteUser);

// router.patch("/update",ContactController.update);

// router.post("/login",ContactController.login);

export default router;