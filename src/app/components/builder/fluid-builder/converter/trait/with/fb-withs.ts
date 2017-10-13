import { Field } from '../../../../../../classes/parse/field/field';
import { capitalize } from '../../../../../../classes/capitalize/capitalizer';
import { Indenter } from '../../../../../../classes/indent/indenter';
import { With } from './fb-with';
import { JavaClass } from '../../../../../../classes/parse/parse';

export class WithCreator {

    readonly withs: With[]

    constructor(
        readonly indenter?: Indenter
    ) {
        this.indenter = indenter || new Indenter();
    }

    getWiths(source: JavaClass): With[] {
        return this
            .getIndexArray(source.getFields().length)
            .map(it => this.getWith(it, source.getFields(), source.getName()));
    }

    // You would say there exists convenience for this...
    private getIndexArray(length: number): number[] {
        var indices = [];
        for (var i = 0; i < length; i++) {
            indices.push(i);
        }
        return indices;
    }

    private getWith(i: number, fields: Field[], sourceName: string): With {
        return new With(
            fields[i],
            this.nextType(fields[i + 1], sourceName),
            this.indenter);
    }

    private nextType(nextField: Field, sourceName: string): string {
        return nextField
            ? 'With' + capitalize(nextField.name)
            : 'Build' + sourceName;
    }

}
