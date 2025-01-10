const SPACE = " ";
const EMPTY_CHAR = "";

const extractPalindromes = (sentence: string) =>
    getWordsFromSentence(sentence.toUpperCase())
        .filter(isPalindrome)
        .filter(unique);

const getWordsFromSentence = (sentence: string) => sentence.split(SPACE);

const isPalindrome = (word: string) =>
    word.length > 1 && [...word].reverse().join(EMPTY_CHAR) === word;

const unique = (word: string, index: number, array: string[]) =>
    array.indexOf(word) === index;

describe("Palindromes", () => {
    it("should exctract palindromes of a very short sentence", () => {
        expect(extractPalindromes("")).toEqual([]);
        expect(extractPalindromes("AA")).toEqual(["AA"]);
        expect(extractPalindromes("A")).toEqual([]);
        expect(extractPalindromes("AB")).toEqual([]);
        expect(extractPalindromes("aa")).toEqual(["AA"]);
        expect(extractPalindromes("aba")).toEqual(["ABA"]);
        expect(extractPalindromes("abca")).toEqual([]);
        expect(extractPalindromes("Anna")).toEqual(["ANNA"]);
    });

    it("should extract palindromes of a sentence with several words", () => {
        expect(extractPalindromes("aa ")).toEqual(["AA"]);
        expect(extractPalindromes("aa bb")).toEqual(["AA", "BB"]);
        expect(extractPalindromes("aa bb aa")).toEqual(["AA", "BB"]);
    });
});