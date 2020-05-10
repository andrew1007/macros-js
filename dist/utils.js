"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
