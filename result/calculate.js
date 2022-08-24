"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = void 0;
function calculate(items) {
    const amounts = {};
    for (const item of items) {
        const split = item.price / item.names.length;
        for (const name of item.names) {
            if (amounts[name]) {
                amounts[name] += split;
            }
            else {
                amounts[name] = split;
            }
        }
    }
    const result = [];
    for (const name of Object.keys(amounts)) {
        result.push({
            name,
            amount: amounts[name]
        });
    }
    return result;
}
exports.calculate = calculate;
