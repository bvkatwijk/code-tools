import { With } from '../trait/with/fb-with';
import { Build } from '../trait/build/fb-build';
import { Indenter } from '../../../../../classes/indent/indenter';
import { Field } from '../../../../../classes/parse/field/field';

export class FluidBuilderClass {

    constructor(
        readonly indenter?: Indenter
    ) {
        this.indenter = indenter || new Indenter();
    }

    declarationAndBody(classname: string, fields: Field[], withs: With[], targetBuild: Build): string {
        return [
            this.builderClassDeclaration(classname, withs, targetBuild),
            this.builderClassBody(
                fields,
                withs.map(it => it.method()),
                targetBuild),
            '}'
        ].join('\n\n');
    }

    private builderClassDeclaration(classname: string, withs: With[], targetBuild: Build): string {
        return '/** 2017-08-06 Generated Fluid Builder github.com/bvkatwijk/fluid-builder-generator */'
            + '\npublic static class ' + classname + 'Builder implements ' + this.getWithTypes(withs, targetBuild) + ' {';
    }

    private getWithTypes(withs: With[], targetBuild: Build): string {
        return withs
            .map(it => it.getType())
            .join(', ') + ', ' + targetBuild.getType();
    }

    private builderClassBody(fields: Field[], methods: string[], targetBuild: Build): string {
        return this
            .indenter
            .indent([
                this.mutableFieldDeclarations(fields),
                methods.join('\n\n'),
                targetBuild.method(fields.map(it => it.name).join(', '))
            ].join('\n\n'));
    }

    private builderMethodDeclaration(): string {
        return 'public static WithFirstField builder() {'
            + '\n' + this.indenter.indent('return new SingleFieldSampleBuilder();')
            + '\n}';
    }

    private mutableFieldDeclarations(fields: Field[]): string {
        return fields
            .map(it => it.mutableDeclaration())
            .join('\n');
    }

}
