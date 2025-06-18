let market = new Map([
    ["apple", 2],
    ["banana", 5],
    ["tomato", 4],
    ["pineapple", 2],
    ["carrot", 1],
    ["potato", 5],
    ["cabbage", 2],
    ["peach", 4],
    ["apricots", 2],
    ["garlic", 1],
])

for (const [key, value] of market) {
    if(value > 3)
        console.log(`${key} - ${value}`);
}

console.log('------------------------');

const sorted = [...market.entries()].sort((a, b) => b[1] - a[1]);
for (const [key, value] of sorted) {
    console.log(`${key} - ${value}`);
}
