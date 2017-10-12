import { Indenter } from '../../../../../../classes/indent/indenter';
import { capitalize } from '../../../../../../classes/capitalize/capitalizer';
import { TraitAndMethod } from '../../../../../../classes/trait-method';
import { Field } from '../../../../../../classes/parse/field/field';

export class With implements TraitAndMethod {

    constructor(
        readonly fieldName: string,
        readonly targetType: string,
        readonly indenter?: Indenter,
    ) {
        this.indenter = indenter || new Indenter();
    }

    trait(): string {
        return "public static interface With" + capitalize(this.fieldName) + " {"
            + "\n" + this.indenter.indent("public " + this.targetType + " " + this.fieldName + "(String " + this.fieldName + ");")
            + "\n}";
    }

    method(): string {
        return "@Override"
            + "\npublic " + this.targetType + " " + this.fieldName + "(String " + this.fieldName + ") {"
            + "\n" + this.indenter.indent("this." + this.fieldName + " = " + this.fieldName + ";")
            + "\n" + this.indenter.indent("return this;")
            + "\n}";
    }

}