import { capitalize } from '../../../../../../classes/capitalize/capitalizer';
import { TraitAndMethod } from '../../../../../../classes/trait-method';
import { Field } from '../../../../../../classes/parse/field/field';

export class With implements TraitAndMethod {

    constructor(
        readonly fieldName: string,
        readonly targetType: string,
    ) {

    }

    trait(): string {
        return "public static interface With" + capitalize(this.fieldName) + " {"
            + "\n\tpublic " + this.targetType + " " + this.fieldName + "(String " + this.fieldName + ");"
            + "\n}"
    }

    method(): string {
        return "@Override"
            + "\npublic " + this.targetType + " " + this.fieldName + "(String " + this.fieldName + ") {"
            + "\n\tthis." + this.fieldName + " = " + this.fieldName + ";"
            + "\n\treturn this;"
            + "\n}";
    }

}