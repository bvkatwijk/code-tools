
export class Visibility {

    constructor(
        readonly name: string,
        readonly modifier: string
    ) { }

}

export const PRIVATE = new Visibility("private", "private");
export const PROTECTED = new Visibility("protected", "protected");
export const PUBLIC = new Visibility("public", "public");
export const DEFAULT = new Visibility("default", "");

export class Visibilities {

    values(): Visibility[] {
        return [PRIVATE, DEFAULT, PROTECTED, PUBLIC];
    }

    fromString(visibility: string): Visibility {
        return this
            .values()
            .filter(it => it.modifier === visibility)[0] || this.throwError('No visibility found for \"' + visibility + '\"');
    }

    private throwError(message: string): any {
        throw new Error(message);
    }

}