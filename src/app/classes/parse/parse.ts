import { Package } from '../../components/builder/fluid-builder/converter/pack/fb-pack';
import { Field } from './field/field';
import { Visibility, PUBLIC, Visibilities } from './visibility/visibility';
import * as javaParser from 'java-parser';
import { Import } from '../../components/builder/fluid-builder/converter/import/import';

export class JavaClass {

    readonly result: any;

    constructor(
        readonly source: string
    ) {
        this.result = javaParser.parse(source);
    }

    getFields(): Array<Field> {
        return this
            .result
            .types[0]
            .bodyDeclarations
            .filter(it => this.isFieldDeclaration(it))
            .map(it => this.toField(it));
    }

    getPackage(): Package {
        return new Package(this
            .result
            .package);
    }

    getImport(): Import {
        return new Import(this
            .result
            .imports);
    }

    getName(): string {
        return this
            .result
            .types[0]
            .name
            .identifier;
    }

    private isFieldDeclaration(bodyDeclaration: any): boolean {
        return bodyDeclaration.node === 'FieldDeclaration';
    }

    private toField(fieldDeclaration: any): Field {
        return new Field(
            new Visibilities().fromStrings(fieldDeclaration.modifiers.map(it => it.keyword)),
            true,
            fieldDeclaration.type.name.identifier,
            fieldDeclaration.fragments[0].name.identifier,
        );
    }

}
