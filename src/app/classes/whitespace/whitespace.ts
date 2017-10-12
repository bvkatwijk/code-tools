
/**
 * Helper class for verifying whitespaces
 */
export class Whitespace {

    /**
     * Print supplied text with displayed whitespace characters
     */
    print(value: string): void {
        console.log(this.show(value));
    }

    /**
     * Convert supplied text to displayed whitespace characters
     */
    show(value: string): string {
        return value
            .replace(/\n/g, '\\n')
            .replace(/\t/g, '\\t')
            .replace(/ /g, '+');
    }

}
