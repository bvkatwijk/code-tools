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

});