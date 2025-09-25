import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const UserSchema = new Schema({
    id: ObjectId,
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    phoneNumber: { type: Number, require: true, unique: true }
});
export const UserModel = mongoose.model("User", UserSchema);
const TagSchema = new Schema({
    title: { type: String, require: true, unique: true }
});
const CourseSchema = new Schema({
    title: { type: String },
    link: { type: String },
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: [{ type: mongoose.Types.ObjectId, ref: 'User',
            required: true }]
});
export const CourseModel = mongoose.model("Courses", CourseSchema);
//# sourceMappingURL=db.js.map