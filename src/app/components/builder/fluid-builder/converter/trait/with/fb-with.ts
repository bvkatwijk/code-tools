import { TraitAndMethod } from '../../../../../../classes/trait-method';
import { Field } from '../../../../../../classes/parse/field/field';

export class With implements TraitAndMethod {

    constructor(
        readonly from: string,
        readonly to: string,
    ) {

    }

    trait(): string {
        return '';
    }

    method(): string {
        return "@Override"
            + "\npublic BuildSingleFieldSample firstField(String firstField) {"
            + "\n\tthis.firstField = firstField;"
            + "\n\treturn this;"
            + "\n}";
    }

}