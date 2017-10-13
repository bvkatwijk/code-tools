import { capitalize } from '../../../../classes/capitalize/capitalizer';
import { Package } from './pack/fb-pack';
import { FluidBuilderClass } from './class/fb-class';
import { Field } from '../../../../classes/parse/field/field';
import { With } from './trait/with/fb-with';
import { JavaClass } from 'app/classes/parse/parse';
import { Build } from 'app/components/builder/fluid-builder/converter/trait/build/fb-build';
import { Indenter } from 'app/classes/indent/indenter';

export class FluidBuilderConverter {

    readonly indenter = new Indenter('    ');

    convert(value: string): string {
        const result = new JavaClass(value);
        const fields = result.getFields();
        const sourceType = result.getName();

        const traits: string[] = [];
        const withs: With[] = [];
        for (let i = 0; i < fields.length; i++) {
            if (fields[i + 1]) {
                const nextWith = new With(fields[i], 'With' + capitalize(fields[i + 1].name), this.indenter);
                traits.push(nextWith.trait());
                withs.push(nextWith);
            } else {
                const nextWith = new With(fields[i], 'Build' + sourceType, this.indenter);
                traits.push(nextWith.trait());
                withs.push(nextWith);
            }
        }

        const targetBuild = new Build(sourceType, this.indenter);

        return [
            result.getPackage().getDeclaration(),
            result.getImport().getStatement(),
            this.sourceClassDeclaration(),
            this.sourceClassBody(fields, withs, targetBuild),
            '}',
        ].join('\n\n') + '\n';
    }

    private sourceClassDeclaration(): string {
        return '@Value'
            + '\npublic class SingleFieldSample {';
    }

    private sourceClassBody(fields: Field[], withs: With[], targetBuild: Build): string {
        return this.indenter.indent([
            this.immutableFieldDeclarations(fields),
            this.builderMethodDeclaration(),
            this.builderClassDeclaration(fields, withs, targetBuild),
            withs.map(it => it.trait()).join('\n\n'),
            targetBuild.trait()
        ].join('\n\n'));
    }

    private builderClassDeclaration(fields: Field[], withs: With[], targetBuild: Build, ): string {
        return new FluidBuilderClass(this.indenter)
            .declarationAndBody(fields, withs, targetBuild);
    }

    private builderMethodDeclaration(): string {
        return 'public static WithFirstField builder() {'
            + '\n' + this.indenter.indent('return new SingleFieldSampleBuilder();')
            + '\n}';
    }

    private immutableFieldDeclarations(fields: Field[]): string {
        return fields
            .map(it => it.immutableDeclaration())
            .join('\n');
    }

}
