import { Whitespace } from '../whitespace/whitespace';

export class StringHelper {

    readonly whitespace = new Whitespace();

    /**
     * Assert supplied strings are equal. Shows line by line difference
     */
    assertEquals(one: string, other: string): void {
        const oneLines = this.lines(one);
        const otherLines = this.lines(other);
        expect(oneLines.length).toEqual(otherLines.length);

        for (let i = 0; i < oneLines.length; i++) {
            expect('[line ' + i + ']' + this.whitespace.show(oneLines[i])).toEqual('[line ' + i + ']' + this.whitespace.show(otherLines[i]));
        }
    }

    private lines(value: string): string[] {
        return value.split('\n');
    }

}
