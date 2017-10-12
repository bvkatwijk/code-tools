import { Field } from 'app/classes/parse/field/field';
import { Visibility, PUBLIC, Visibilities } from 'app/classes/parse/visibility/visibility';
import * as javaParser from 'java-parser';

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
