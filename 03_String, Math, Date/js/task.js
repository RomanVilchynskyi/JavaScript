
const rectangle = {
    topLeft: { x: 2, y: 5 },
    bottomRight: { x: 7, y: 1 }
};

function printRectangleInfo(rect) {
    console.log("Top left point: (" + rect.topLeft.x + ", " + rect.topLeft.y + ")");
    console.log("Bottom right point: (" + rect.bottomRight.x + ", " + rect.bottomRight.y + ")");
}

function getWidth(rect) {
    return Math.abs(rect.bottomRight.x - rect.topLeft.x);
}

function getHeight(rect) {
    return Math.abs(rect.topLeft.y - rect.bottomRight.y);
}

function getArea(rect) {
    return getWidth(rect) * getHeight(rect);
}

function getPerimeter(rect) {
    return 2 * (getWidth(rect) + getHeight(rect));
}

function changeWidth(rect, num) {
    rect.bottomRight.x = rect.topLeft.x + getWidth(rect) + num;
}

printRectangleInfo(rectangle);
console.log("Width:", getWidth(rectangle));
console.log("Height:", getHeight(rectangle));
console.log("Area:", getArea(rectangle));
console.log("Perimeter:", getPerimeter(rectangle));

changeWidth(rectangle, 3);
console.log("\nAfter width changes:");
printRectangleInfo(rectangle);
console.log("New width:", getWidth(rectangle));
