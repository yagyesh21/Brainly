import { Router } from "express";
import { UserModel } from "../db.js";
export const userRouter = Router();
userRouter.post("/", async (req, res) => {
    try {
        const { username, password, email, phoneNumber } = req.body;
        const user = await UserModel.create({
            username: username,
            password: password,
            email: email,
            phoneNumber: phoneNumber
        });
        if (user) {
            res.send({
                "message": "You are signed Up"
            });
        }
        else {
            res.status(403).json({
                "messsage": "Invalid Information "
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
userRouter.post("/signin", (req, res) => {
});
userRouter.get("/api/v1/content", (req, res) => {
});
userRouter.delete("/api/v1/contet", (req, res) => {
});
userRouter.post("/api/v1/brain/share", (req, res) => {
});
userRouter.get("/api/v1/brain/:sharelink", (req, res) => {
});
//# sourceMappingURL=User.js.map