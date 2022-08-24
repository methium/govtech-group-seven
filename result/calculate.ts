export type Item = {
    item: string;
    price: number;
    names: string[];
};

export type CalculationResultSingle = {
    name: string;
    amount: number;
};

export type FullCalculationResult = CalculationResultSingle[];

export function calculate(items: Item[]): FullCalculationResult {
    const amounts: Record<string, number> = {};

    for (const item of items) {
        const split = item.price / item.names.length;
        
        for (const name of item.names) {
            if (amounts[name]) {
                amounts[name] += split;
            } else {
                amounts[name] = split;
            }
        }
    }

    const result: FullCalculationResult = [];

    for (const name of Object.keys(amounts)) {
        result.push({
            name,
            amount: amounts[name]
        });
    }

    return result;
}