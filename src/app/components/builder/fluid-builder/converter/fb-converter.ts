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
        const pack = new Package(result.getPackage());
        const fields = result.getFields();
        const target = result.getName();

        const methods: string[] = [];
        const traits: string[] = [];
        for (let i = 0; i < fields.length; i++) {
            if (fields[i + 1]) {
                const nextWith = new With(fields[i].name, fields[i + 1].name, this.indenter);
                methods.push(nextWith.method());
                traits.push(nextWith.trait());
            } else {
                const nextWith = new With(fields[i].name, 'Build' + target, this.indenter);
                methods.push(nextWith.method());
                traits.push(nextWith.trait());
            }
        }

        const targetBuild = new Build(target, this.indenter);

        return [
            pack.getDeclaration(),
            this.importStatements(),
            this.sourceClassDeclaration(),
            this.sourceClassBody(fields, methods, targetBuild, traits),
            '}',
        ].join('\n\n') + '\n';
    }

    private builderClassDeclaration(fields: Field[], methods: string[], targetBuild: Build,): string {
        return new FluidBuilderClass(this.indenter)
            .declarationAndBody(fields, methods, targetBuild);
    }

    private builderMethodDeclaration(): string {
        return 'public static WithFirstField builder() {'
            + '\n' + this.indenter.indent('return new SingleFieldSampleBuilder();')
            + '\n}';
    }

    private importStatements(): string {
        return 'import lombok.Value;';
    }

    private sourceClassDeclaration(): string {
        return '@Value'
            + '\npublic class SingleFieldSample {';
    }

    private sourceClassBody(fields: Field[], methods: string[], targetBuild: Build, traits: any[]): string {
        return this.indenter.indent([
            this.immutableFieldDeclarations(fields),
            this.builderMethodDeclaration(),
            this.builderClassDeclaration(fields, methods, targetBuild),
            traits.join('\n\n'),
            targetBuild.trait()
        ].join('\n\n'));
    }

    private immutableFieldDeclarations(fields: Field[]): string {
        return fields
            .map(it => it.immutableDeclaration())
            .join('\n');
    }

}
