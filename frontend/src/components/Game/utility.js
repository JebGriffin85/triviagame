export function getRandomQuestion (array) {
    const arrayLength = array.length;
    let num = Math.floor(Math.random() * (arrayLength - 0));
    return array[num]
}