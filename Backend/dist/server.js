import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { CourseModel, UserModel } from "./db.js";
import { userMiddleware } from "./middleware.js";
const JWT_PASSWORD = "GlitchXAce04";
app.use(express.json());
app.post("/api/v1/signUp", async (req, res) => {
    const { username, password, email, phoneNumber } = req.body;
    try {
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
app.post("/api/v1/signin", async (req, res) => {
    const { username, password } = req.body;
    try {
        const checkUser = await UserModel.findOne({
            username: username,
            password: password
        });
        if (checkUser) {
            const token = jwt.sign({
                id: checkUser._id
            }, JWT_PASSWORD);
            res.json({
                token
            });
        }
        else {
            res.status(403).json({
                message: "Incorrect Credentials"
            });
        }
    }
    catch (error) {
        console.log(error);
    }
}); //asdfgh
app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const { link, type } = req.body;
    await CourseModel.create({
        link,
        type,
        //@ts-ignore
        userId: req.userId,
        tags: []
    });
    return res.json({
        message: "Content Added"
    });
});
app.get("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await CourseModel.find({
        userId: userId
    }).populate("userId", "username"); // this will show username
    res.json({
        content
    });
});
app.delete("api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
    await CourseModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    });
    res.json({
        message: "Deleted"
    });
});
async function runServer() {
    // const mongoUrl : string = process.env.MONGO_URL
    try {
        await mongoose.connect("");
        console.log("db connected");
    }
    catch (error) {
        console.log(error);
    }
    app.listen(3000, () => {
        console.log("running");
    });
}
runServer();
//# sourceMappingURL=server.js.map