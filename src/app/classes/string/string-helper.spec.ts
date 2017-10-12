import { Whitespace } from '../whitespace/whitespace';

export class StringHelper {

    readonly whitespace = new Whitespace();

    /**
     * Assert supplied strings are equal. Shows line by line difference
     */
    assertEquals(one: string, other: string): void {
        const oneLines = this.lines(one);
        const otherLines = this.lines(other);

        for (var i = 0; i < oneLines.length; i++) {
            expect(this.whitespace.show(oneLines[i])).toEqual(this.whitespace.show(otherLines[i]));
        }
    }

    private lines(value: string): string[] {
        return value.split('\n');
    }

}