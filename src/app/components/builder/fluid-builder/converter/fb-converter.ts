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

        return [
            result.getPackage().getDeclaration(),
            result.getImport().getStatement(),
            this.sourceClassDeclaration(),
            this.sourceClassBody(result),
            '}',
        ].join('\n\n') + '\n';
    }

    private sourceClassDeclaration(): string {
        return '@Value'
            + '\npublic class SingleFieldSample {';
    }

    private sourceClassBody(source: JavaClass): string {
        const withs = this.createWiths(source);
        const build = new Build(source.getName(), this.indenter);
        return this.indenter.indent([
            this.immutableFieldDeclarations(source.getFields()),
            this.builderMethodDeclaration(),
            this.builderClassDeclaration(source.getFields(), withs, build),
            withs.map(it => it.trait()).join('\n\n'),
            build.trait()
        ].join('\n\n'));
    }

    private createWiths(source: JavaClass): With[] {
        const fields = source.getFields();
        const withs: With[] = [];
        for (let i = 0; i < fields.length; i++) {
            if (fields[i + 1]) {
                const nextWith = new With(fields[i], 'With' + capitalize(fields[i + 1].name), this.indenter);
                withs.push(nextWith);
            } else {
                const nextWith = new With(fields[i], 'Build' + source.getName(), this.indenter);
                withs.push(nextWith);
            }
        }
        return withs;
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
