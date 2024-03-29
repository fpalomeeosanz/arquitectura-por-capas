import { Router } from "express";
import { UsersController } from "../controllers/users.controller.js";
 
const router = Router();

router.get("/", UsersController.getUsers);
router.post("/", UsersController.saveUser);

export { router as usersRouter }; 