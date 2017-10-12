import { PRIVATE, PUBLIC, Visibilities } from '../visibility/visibility';
import { Field } from './field';

describe("Field", () => {

    describe('public final Integer someNumber', () => {

        let immutableField: Field = new Field(PUBLIC, true, 'Integer', 'someNumber');

        it('should generate correct declaration', () => {
            expect(immutableField.declaration()).toEqual("public final Integer someNumber;");
        });

        it('should generate correct mutable declaration', () => {
            expect(immutableField.mutableDeclaration()).toEqual("public Integer someNumber;");
        });

        it('should generate correct immutable declaration', () => {
            expect(immutableField.immutableDeclaration()).toEqual("public final Integer someNumber;");
        });

    });

    describe('public final Integer someNumber', () => {

        let field: Field = new Field(PRIVATE, false, 'String', 'someText');

        it('should generate correct declaration', () => {
            expect(field.declaration()).toEqual("private String someText;");
        });

        it('should generate correct mutable declaration', () => {
            expect(field.mutableDeclaration()).toEqual("private String someText;");
        });

        it('should generate correct immutable declaration', () => {
            expect(field.immutableDeclaration()).toEqual("private final String someText;");
        });

    });

});