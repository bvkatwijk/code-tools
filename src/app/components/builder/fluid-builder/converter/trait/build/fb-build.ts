import { capitalize } from '../../../../../../classes/capitalize/capitalizer';
import { Indenter } from '../../../../../../classes/indent/indenter';

export class Build {

    constructor(
        readonly target: string,
        readonly indenter?: Indenter
    ) {
        this.target = capitalize(target);
        this.indenter = indenter || new Indenter();
    }

    getType(): string {
        return 'Build' + capitalize(this.target);
    }

    trait(): string {
        return 'public static interface Build' + this.target + ' {'
            + '\n' + this.indenter.indent('public ' + this.target + ' build();')
            + '\n}';
    }

    method(firstField: string): string {
        return '@Override'
            + '\npublic ' + this.target + ' build() {'
            + '\n' + this.indenter.indent('return new ' + this.target + '(' + firstField + ');')
            + '\n}';
    }

}
