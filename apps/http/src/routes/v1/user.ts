import { Router } from "express";

export const userRouter = Router();

userRouter.get("/metadata", (req, res) => {
    res.json({
        nigaa: "yaa",
    })
})