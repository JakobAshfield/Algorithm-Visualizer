export function generateRandomArray(size = 100, min = 10, max = 490) {
    return Array.from({length: size}, () => Math.floor(Math.random() * max + min));
}