"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.String = void 0;
class String {
    constructor() {
        this.container = [];
    }
    add(value) {
        this.container.push(value);
    }
    checkString() {
        this.container = this.container[0].split('');
        let container1 = this.container;
        let flag = -1;
        for (let i = 0; i < this.container.length; i++) {
            if (this.container[i] != container1[container1.length - 1 - i]) {
                flag = 1;
                return console.log('Chuỗi bất đối xứng');
            }
        }
        if (flag = -1) {
            return console.log('Chuỗi đối xứng');
        }
    }
}
exports.String = String;
//# sourceMappingURL=string.js.map