import { cipherfunct } from "./cipher";

describe("Caesar cipher test", () => {
    it("adds a positive number to the character code", () => {
        const outcome = "BBB";
        const actual = cipherfunct("AAA", 1);
        expect(actual).toEqual(outcome);
    });
    it("adds a big positive number to the character code", () => {
        const outcome = "AAA";
        const actual = cipherfunct("AAA", 26);
        expect(actual).toEqual(outcome);
    })
    it("adds a negative number to the character code", () => {
        const outcome = "AAA";
        const actual = cipherfunct("BBB", -1);
        expect(actual).toEqual(outcome);
    })
    it("adds a big negative number to the character code", () => {
        const outcome = "AAA";
        const actual = cipherfunct("AAA", -26);
        expect(actual).toEqual(outcome);
    })
    it("adds a number in the string", () => {
        const outcome = "12CC";
        const actual = cipherfunct("12BB", 1);
        expect(actual).toEqual(outcome);
    })
    it("adds a symbol in the string", () => {
        const outcome = "12CC!%";
        const actual = cipherfunct("12BB!%", 1);
        expect(actual).toEqual(outcome);
    })
    it("adds all numbers", () => {
        const outcome = "1234";
        const actual = cipherfunct("1234", 4);
        expect(actual).toEqual(outcome);
    })
    it("adds a string in small case", () => {
        const outcome = "BBB";
        const actual = cipherfunct("aaa", 1);
        expect(actual).toEqual(outcome);
    })
})
