import { JavaClass } from '../../../../../classes/parse/parse';
import { Segments } from 'app/components/builder/fluid-builder/converter/segments/segments';

export class Package extends Segments {

    constructor(
        readonly packageJson: any
    ) {
        super();
    }

    /**
     * return package declaration
     */
    getDeclaration(): string {
        return 'package ' + this.jsonToString(this.packageJson.name) + ';';
    }

}