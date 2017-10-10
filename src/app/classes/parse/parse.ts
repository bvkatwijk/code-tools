import { Field } from "app/classes/parse/field/field";
import { Visibility, PUBLIC } from "app/classes/parse/visibility/visibility";
import * as javaParser from 'java-parser';

export class JavaParser {

    constructor() { }

    parse(value: string): void {
        let field = javaParser.parse(value).types[0].bodyDeclarations[0];

        this.getFields(javaParser.parse(value).types[0].bodyDeclarations);
    }

    getFields(bodyDeclarations: any[]): Array<Field> {
        return bodyDeclarations
            .filter(it => this.isFieldDeclaration(it))
            .map(it => this.toField(it));
    }

    private isFieldDeclaration(bodyDeclaration: any): boolean {
        return bodyDeclaration.node === "FieldDeclaration";
    }

    private toField(fieldDeclaration: any): Field {
        return new Field(
            PUBLIC, // VisibilityFinder.fromFieldDeclaration(fieldDeclaration.modifiers),
            true,
            fieldDeclaration.type.name.identifier,
            fieldDeclaration.fragments[0].name.identifier,
        );
    }

}