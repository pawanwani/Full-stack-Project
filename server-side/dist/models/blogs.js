"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var BlogSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    subtitle: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    writer: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    tags: [
        { type: String,
            required: true, }
    ],
}, { timestamps: true }); //passing a constructor here
var Blogs = mongoose_1.default.model("blogs", BlogSchema);
exports.default = Blogs;
