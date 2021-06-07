"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: Number,
    },
    gender: {
        type: String,
    },
    role: {
        type: String,
    },
    password: {
        type: String,
    },
    image: {
        type: String,
    },
    blogs: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "blogs",
        },
    ],
}, { timestamps: true }); //passing a constructor here
var User = mongoose_1.default.model("user", UserSchema);
exports.default = User;
