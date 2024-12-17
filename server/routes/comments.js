import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { createComment, getPostComments } from "../controllers/comments.js";

const router = new Router();

router.post("/:id", checkAuth, createComment);

router.get("/", checkAuth, getPostComments);

export default router;
