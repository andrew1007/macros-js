"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Process = /** @class */ (function () {
    function Process(instance) {
        this.instance = instance;
    }
    Process.prototype.press = function (key) {
        return new Press(key);
    };
    return Process;
}());
exports.default = Process;
