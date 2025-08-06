import { json, Router } from "express";
import { userRouter } from "./user";
import { spaceRouter } from "./space";
import { adminRouter } from "./admin";

export const router =  Router();

router.get("/signup", (req, res) => {
    res.json({
        message: "Sign up"
    })
})

router.get("/signin", (req, res) => {
    res.json({
        message: "Sign in"
    })
})

router.get("/elements", (req, res) => {

})

router.get("/avatars", (req, res) => {
    
})

router.use("/user", userRouter)

router.use("/space", spaceRouter)

router.use("/admin", adminRouter)