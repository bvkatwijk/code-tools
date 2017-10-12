import { Whitespace } from './whitespace';

describe("Whitespace converter", () => {

    let whitespace = new Whitespace();

    describe('tabs', () => {

        it('should convert "\t" to "\\t"', () => {
            expect(whitespace.show('\t')).toEqual('\\t');
        });

        it('should convert "\t\t" to "\\t\\t"', () => {
            expect(whitespace.show('\t\t')).toEqual('\\t\\t');
        });

    });

    describe('spaces', () => {

        it('should convert " " (single space) to "+"', () => {
            expect(whitespace.show(' ')).toEqual('+');
        });

        it('should convert "  " (double space) to "++"', () => {
            expect(whitespace.show('  ')).toEqual('++');
        });

    });

    describe('newlines', () => {

        it('should convert "\n" to "\\n"', () => {
            expect(whitespace.show('\n')).toEqual('\\n');
        });

        it('should convert "\n" (double space) to "\\n\\n"', () => {
            expect(whitespace.show('\n\n')).toEqual('\\n\\n');
        });

    });

});