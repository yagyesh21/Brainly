import mongoose from "mongoose";
export declare const UserModel: mongoose.Model<{
    _id?: mongoose.Types.ObjectId | null;
    username?: string | null;
    password?: string | null;
    email?: string | null;
    phoneNumber?: number | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    _id?: mongoose.Types.ObjectId | null;
    username?: string | null;
    password?: string | null;
    email?: string | null;
    phoneNumber?: number | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    _id?: mongoose.Types.ObjectId | null;
    username?: string | null;
    password?: string | null;
    email?: string | null;
    phoneNumber?: number | null;
} & Required<{
    _id: mongoose.Types.ObjectId | null;
}> & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    _id?: mongoose.Types.ObjectId | null;
    username?: string | null;
    password?: string | null;
    email?: string | null;
    phoneNumber?: number | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    _id?: mongoose.Types.ObjectId | null;
    username?: string | null;
    password?: string | null;
    email?: string | null;
    phoneNumber?: number | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    _id?: mongoose.Types.ObjectId | null;
    username?: string | null;
    password?: string | null;
    email?: string | null;
    phoneNumber?: number | null;
}> & Required<{
    _id: mongoose.Types.ObjectId | null;
}> & {
    __v: number;
}>>;
//# sourceMappingURL=db.d.ts.map