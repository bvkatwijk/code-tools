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
            this.assertLineEquals(i, oneLines[i], otherLines[i]);
        }
    }

    private assertLineEquals(line: number, expected: string, actual: string): void {
        expect(this.render(line, expected)).toEqual(this.render(line, actual));
    }

    private render(line: number, value: string): string {
        return '[line ' + line + ']' + this.showWhitespace(value);
    }

    private showWhitespace(value: string): string {
        return this
            .whitespace
            .show(value);
    }

    private lines(value: string): string[] {
        return value.split('\n');
    }

}
