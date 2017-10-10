import { Visibilities, PUBLIC, PRIVATE, PROTECTED, DEFAULT, Visibility } from "app/classes/parse/visibility/visibility";

describe("Visibility", () => {

    describe("Finder", () => {

        it("can determine public visibility", () => {
            expect(new Visibilities().fromString("public")).toBe(PUBLIC);
        });

        it("can determine private visibility", () => {
            expect(new Visibilities().fromString("private")).toBe(PRIVATE);
        });

        it("can determine protected visibility", () => {
            expect(new Visibilities().fromString("protected")).toBe(PROTECTED);
        });

        it("can determine default visibility", () => {
            expect(new Visibilities().fromString("")).toBe(DEFAULT);
        });

        it("throws on invalid visibility", () => {
            expect(() => { new Visibilities().fromString("something else"); }).toThrowError();
        });

    });

});