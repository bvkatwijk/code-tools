
/**
 * Helper class for verifying whitespaces
 */
export class Whitespace {

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
