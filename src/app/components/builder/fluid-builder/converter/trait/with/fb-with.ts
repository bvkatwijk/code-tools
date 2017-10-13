import { Indenter } from '../../../../../../classes/indent/indenter';
import { capitalize } from '../../../../../../classes/capitalize/capitalizer';
import { TraitAndMethod } from '../../../../../../classes/trait-method';
import { Field } from '../../../../../../classes/parse/field/field';

export class With implements TraitAndMethod {

    constructor(
        readonly field: Field,
        readonly targetType: string,
        readonly indenter?: Indenter,
    ) {
        this.indenter = indenter || new Indenter();
    }

    getType(): string {
        return 'With' + capitalize(this.field.name);
    }

    trait(): string {
        return 'public static interface ' + this.getType() + ' {'
            + '\n' + this.indenter.indent('public ' + this.targetType + ' ' + this.field.name + '(' + this.field.type + ' ' + this.field.name + ');')
            + '\n}';
    }

    method(): string {
        return '@Override'
            + '\npublic ' + this.targetType + ' ' + this.field.name + '(' + this.field.type + ' ' + this.field.name + ') {'
            + '\n' + this.indenter.indent('this.' + this.field.name + ' = ' + this.field.name + ';')
            + '\n' + this.indenter.indent('return this;')
            + '\n}';
    }

}
