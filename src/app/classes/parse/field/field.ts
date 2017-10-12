import { Visibility } from '../visibility/visibility';

export class Field {

    constructor(
        readonly visibility: Visibility,
        readonly isFinal: boolean,
        readonly type: string,
        readonly name: string,
    ) { }

    declaration(): string {
        return this.isFinal
            ? this.immutableDeclaration()
            : this.mutableDeclaration();
    }

    immutableDeclaration(): string {
        return this.visibility.name + " final " + this.type + " " + this.name + ";";
    }

    mutableDeclaration(): string {
        return this.visibility.name + " " + this.type + " " + this.name + ";";
    }

}
