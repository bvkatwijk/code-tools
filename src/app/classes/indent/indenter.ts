import { Whitespace } from '../whitespace/whitespace';

export class Indenter {

    constructor(readonly indentation?: string) {
        this.indentation = indentation || '\t'
    }

    indent(code: string): string {
        return code
            .split('\n')
            .map(it => this.indentation + it)
            .map(it => this.trimEmpty(it))
            .join('\n');
    }

    private trimEmpty(it: string): string {
        if(it.trim() === '') {
            return '';
        }
        return it;
    }

}