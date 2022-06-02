
export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function convertToSeconds(minutes) {
    return minutes * 60;
}

export function getArea(base, height) {
    return base * height / 2;
}

export function lessThan100(a, b) {
    return (a + b) < 100;
}

export function formatName(first, last, middle) {
    let name = first;
    if (middle) {
    name += ' ' + middle;
    }
    name += ' ' + last;

    return name;
}

