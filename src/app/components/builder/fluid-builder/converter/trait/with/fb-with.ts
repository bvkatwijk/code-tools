import { TraitAndMethod } from '../../../../../../classes/trait-method';
import { Field } from '../../../../../../classes/parse/field/field';

export class With implements TraitAndMethod {

    constructor(
        readonly fieldName: string,
        readonly targetType: string,
    ) {

    }

    trait(): string {
        return '';
    }

    method(): string {
        return "@Override"
            + "\npublic " + this.targetType + " " + this.fieldName + "(String " + this.fieldName + ") {"
            + "\n\tthis." + this.fieldName + " = " + this.fieldName + ";"
            + "\n\treturn this;"
            + "\n}";
    }

}