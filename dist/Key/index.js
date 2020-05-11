"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var robotjs_1 = __importDefault(require("robotjs"));
var constants_1 = require("./constants");
var _ = {};
var press = new Proxy(_, {
    get: function (_, prop) {
        return function () {
            robotjs_1.default.keyTap(constants_1.KEY_NAMES[prop]);
        };
    }
});
var hold = new Proxy(_, {
    get: function (_, prop) {
        return function () {
            robotjs_1.default.keyToggle(constants_1.KEY_NAMES[prop], 'down');
        };
    }
});
var release = new Proxy(_, {
    get: function (_, prop) {
        return function () {
            robotjs_1.default.keyToggle(constants_1.KEY_NAMES[prop], 'up');
        };
    }
});
exports.default = {
    press: press,
    hold: hold,
    release: release
};
