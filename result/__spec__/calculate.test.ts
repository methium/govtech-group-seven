import type {Item, FullCalculationResult} from '../calculate';
import {calculate} from '../calculate';

describe('calculate', () => {
    it('quick happy scenario', () => {

        const data: Item[] = [
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

        const result: FullCalculationResult = calculate(data);

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