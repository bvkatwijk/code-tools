import { capitalize } from '../../../../classes/capitalize/capitalizer';
import { Package } from './pack/fb-pack';
import { FluidBuilderClass } from './class/fb-class';
import { Field } from '../../../../classes/parse/field/field';
import { With } from './trait/with/fb-with';
import { JavaClass } from 'app/classes/parse/parse';
import { Build } from 'app/components/builder/fluid-builder/converter/trait/build/fb-build';
import { Indenter } from 'app/classes/indent/indenter';
import { WithCreator } from 'app/components/builder/fluid-builder/converter/trait/with/fb-withs';

export class FluidBuilderConverter {

    readonly indenter = new Indenter('    ');

    convert(value: string): string {
        const result = new JavaClass(value);

        return [
            this.sourcePackageDeclaration(result),
            this.sourceImports(result),,
            this.sourceClassDeclaration(result),
            this.sourceClassBody(result),
            '}',
        ]
        .filter(string => string !== '')
        .join('\n\n') + '\n';
    }

    private sourceImports(result: JavaClass) {
        return result
            .getImport()
            .getStatement();
    }

    private sourceClassAnnotations(result: JavaClass) {
        return result.getAnnotations()
            .map(it => it.value);
    }

    private sourcePackageDeclaration(result: JavaClass) {
        return result.getPackage().getDeclaration();
    }

    private sourceClassDeclaration(source: JavaClass): string {
        return [
            this.sourceClassAnnotations(source),
            'public class ' + source.getName() + ' {'
        ]
        .filter(it => it !== '')
        .join('\n');
    }

    private sourceClassBody(source: JavaClass): string {
        const withs = this.createWiths(source);
        const build = new Build(source.getName(), this.indenter);
        return this.indenter.indent([
            this.immutableFieldDeclarations(source.getFields()),
            this.builderMethodDeclaration(source.getFields(), source.getName()),
            this.builderClassDeclaration(source.getName(), source.getFields(), withs, build),
            withs.map(it => it.trait()).join('\n\n'),
            build.trait()
        ].join('\n\n'));
    }

    private createWiths(source: JavaClass): With[] {
        return new WithCreator(this.indenter)
            .getWiths(source);
    }

    private builderClassDeclaration(className: string, fields: Field[], withs: With[], targetBuild: Build, ): string {
        return new FluidBuilderClass(this.indenter)
            .declarationAndBody(className, fields, withs, targetBuild);
    }

    private builderMethodDeclaration(fields: Field[], className: string): string {
        return 'public static ' + this.withFirstField(fields) + ' builder() {'
            + '\n' + this.indenter.indent('return new ' + className + 'Builder();')
            + '\n}';
    }

    public withFirstField(fields: Field[]): any {
        return fields[0].withInterfaceName();
    }

    private immutableFieldDeclarations(fields: Field[]): string {
        return fields
            .map(it => it.immutableDeclaration())
            .join('\n');
    }

}
