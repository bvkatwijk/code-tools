import { JavaClass } from '../../../../../classes/parse/parse';
import { Segments } from 'app/components/builder/fluid-builder/converter/segments/segments';

export class Import extends Segments {

    constructor(
        readonly importJson: any
    ) {
        super();
    }

    /**
     * return package declaration
     */
    getStatement(): string {
        return 'import ' + this.isStatic(this.importJson[0]) + this.jsonToString(this.importJson[0]) + ';';
    }

    private isStatic(it: any): string {
        return it.static
            ? 'static '
            : '';
    }

}