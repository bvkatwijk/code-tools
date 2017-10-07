
export class Indenter {

    constructor(readonly indentation?: string) {
        this.indentation = indentation || '\t'
    }

    indent(code: string): string {
        return this.indentation + code
            .split('\n')
            .join('\n' + this.indentation);
    }

}