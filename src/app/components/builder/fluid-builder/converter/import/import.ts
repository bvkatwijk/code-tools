import { JavaClass } from '../../../../../classes/parse/parse';
import { Segments } from 'app/components/builder/fluid-builder/converter/segments/segments';

export class Import extends Segments {

    constructor(
        readonly importJson: any[]
    ) {
        super();
    }

    /**
     * return package declaration
     */
    getStatement(): string {
        return this
            .importJson
            .map(it => this.getSingleStatement(it))
            .join('\n');
    }

    private getSingleStatement(it: any) {
        return 'import ' + this.isStatic(it) + this.jsonToString(it) + this.isWildcard(it) + ';';
    }

    private isStatic(it: any): string {
        return it.static
            ? 'static '
            : '';
    }

    private isWildcard(it): string {
        return it.onDemand
            ? '.*'
            : '';
    }

}
