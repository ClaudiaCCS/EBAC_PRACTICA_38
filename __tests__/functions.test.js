const {sumArray, countWords, findMax, isDivisible} = require('../js/functions')

describe("Test for sumArray", () => {
    it("Should add an array of numbers", () => {
        const positiveNumbers = [1, 2, 3, 4];
        const negativeNumbers = [-1, -2, -3, -4];
        const emptyArray = [];
        const withCeroNumbers = [0, 1, 2, 3, 4];

        expect(sumArray(positiveNumbers)).toBe(10);
        expect(sumArray(negativeNumbers)).toBe(-10);
        expect(sumArray(emptyArray)).toBe(0);
        expect(sumArray(withCeroNumbers)).toBe(10);

    })

    it ("Should return the number of words in a text string", () => {
        const normalString ="Hola mundo esto es una prueba!";
        const spacesString = "  Hola mundo esto es una prueba  ";
        const emptyString = "";
        const consecutiveString = "  Hola    mundo     esto   es   una     prueba!";

        expect(countWords(normalString)).toBe(6);
        expect(countWords(spacesString)).toBe(6);
        expect(countWords(emptyString)).toBe(0);
        expect(countWords(consecutiveString)).toBe(6);
    })

    it("Should return the highest value in an array", () => {
        const positiveNumbers = [1, 2, 3, 4];
        const negativeNumbers = [-1, -2, -3, -4];
        const emptyArray = [];
        const equalNumbers = [1, 1, 1, 1];

        expect(findMax(positiveNumbers)).toBe(4);
        expect(findMax(negativeNumbers)).toBe(-1);
        expect(findMax(emptyArray)).toBe(null);
        expect(findMax(equalNumbers)).toBe(1);
    })

    it("Should check if a number is divisible by another", () => {
        expect(isDivisible(10,2)).toBe(true);
        expect(isDivisible(10, 3)).toBe(false);
        expect(isDivisible(10, 0)).toBe('No se puede dividir entre cero');
        expect(isDivisible(-10, -2)).toBe(true);
    })
})