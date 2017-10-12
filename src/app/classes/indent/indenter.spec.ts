import { Whitespace } from '../whitespace/whitespace';
import { Indenter } from './indenter';

describe('Indenter', () => {

    describe('using tabs', () => {

        let indenter = new Indenter();

        describe("on single line", () => {

            it("should indent", () => {
                expect(indenter.indent('text')).toEqual('\ttext');
            });

        });

        describe("on multiple lines", () => {

            it("should indent", () => {
                expect(indenter.indent('firstLine\nSecondLine')).toEqual('\tfirstLine\n\tSecondLine');
            });

            it("should trim empty lines", () => {
                expect(indenter.indent('firstLine\n\nSecondLine')).toEqual('\tfirstLine\n\n\tSecondLine');
            });

        });
    });

    describe('using spaces', () => {

        let indenter = new Indenter('  ');

        describe("on single line", () => {

            it("should indent", () => {
                expect(indenter.indent('text')).toEqual('  text');
            });

        });

        describe("on multiple lines", () => {

            it("should indent", () => {
                expect(indenter.indent('firstLine\nSecondLine')).toEqual('  firstLine\n  SecondLine');
            });

        });

    });

    it("should indent java method correctly", () => {
        let method =
            "@Override"
            + "\n" + "public BuildSingleFieldSample firstField(String firstField) {"
            + "\n" + "\tthis.firstField = firstField;"
            + "\n" + "\treturn this;"
            + "\n" + "}";
        let indentedMethod =
            "\t@Override"
            + "\n\t" + "public BuildSingleFieldSample firstField(String firstField) {"
            + "\n\t" + "\tthis.firstField = firstField;"
            + "\n\t" + "\treturn this;"
            + "\n\t" + "}";
        expect(new Indenter().indent(method)).toEqual(indentedMethod);
    });

});