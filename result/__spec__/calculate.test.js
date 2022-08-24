"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculate_1 = require("../calculate");
describe('calculate', () => {
    it('quick happy scenario', () => {
        const data = [
            {
                item: "Chicken Rice",
                price: 24,
                names: [
                    "Hello",
                    "World",
                ],
            },
            {
                item: "HotDog",
                price: 10,
                names: [
                    "Hello",
                    "Foo",
                ],
            }
        ];
        const result = (0, calculate_1.calculate)(data);
        expect(result).toContainEqual({
            name: "World",
            amount: 12,
        });
        expect(result).toContainEqual({
            name: "Foo",
            amount: 5,
        });
        expect(result).toContainEqual({
            name: "Hello",
            amount: 17,
        });
    });
});
