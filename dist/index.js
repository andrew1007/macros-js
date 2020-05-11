"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var robotjs_1 = __importDefault(require("robotjs"));
var key_1 = __importDefault(require("./key"));
robotjs_1.default.setKeyboardDelay(1);
exports.default = key_1.default;
