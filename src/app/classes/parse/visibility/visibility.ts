
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

    fromStrings(visibilities: string[]): Visibility {
        const results = visibilities
            .map(it => this.fromStringOrUndefined(it))
            .filter(it => it != undefined);
        if(results.length == 1) {
            return results[0];
        } else if(results.length > 1) {
            this.throwError('Multiple results ' + results + ' for ' + visibilities);
        } else {
            this.throwError('No results ' + results + ' for ' + visibilities);
        }
    }

    fromString(visibility: string): Visibility {
        return this.fromStringOrUndefined(visibility) || this.throwError('No visibility found for \"' + visibility + '\"');
    }

    private fromStringOrUndefined(visibility: string): Visibility {
        return this
            .values()
            .filter(it => it.modifier === visibility)[0];
    }

    private throwError(message: string): any {
        throw new Error(message);
    }

}