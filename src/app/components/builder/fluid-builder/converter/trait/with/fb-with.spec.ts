import { Indenter } from '../../../../../../classes/indent/indenter';
import { With } from './fb-with';

describe("With", () => {

    describe("trait", () => {

        it('uses dynamic indentation', () => {
            let expected =
                "public static interface WithFirstField {"
                + "\n    public BuildSingleFieldSample firstField(String firstField);"
                + "\n}"
            expect(new With('firstField', 'BuildSingleFieldSample', new Indenter('    ')).trait()).toEqual(expected);
        });

        it('should be created for firstField and BuildSingleFieldSample', () => {
            let expected =
                "public static interface WithFirstField {"
                + "\n\tpublic BuildSingleFieldSample firstField(String firstField);"
                + "\n}"
            expect(new With('firstField', 'BuildSingleFieldSample').trait()).toEqual(expected);
        });

        it('should be created for firstField and TypeName', () => {
            let expected =
                "public static interface WithFirstField {"
                + "\n\tpublic TypeName firstField(String firstField);"
                + "\n}"
            expect(new With('firstField', 'TypeName').trait()).toEqual(expected);
        });

        it('should be created for fieldName and TypeName', () => {
            let expected =
                "public static interface WithFieldName {"
                + "\n\tpublic TypeName fieldName(String fieldName);"
                + "\n}"
            expect(new With('fieldName', 'TypeName').trait()).toEqual(expected);
        });

    });

    describe("method", () => {

        it('should be created for firstField and BuildSingleFieldSample', () => {
            let expected =
                "@Override"
                + "\npublic BuildSingleFieldSample firstField(String firstField) {"
                + "\n\tthis.firstField = firstField;"
                + "\n\treturn this;"
                + "\n}";
            expect(new With('firstField', 'BuildSingleFieldSample').method()).toEqual(expected);
        });

        it('uses dynamic indentation', () => {
            let expected =
                "@Override"
                + "\npublic BuildSingleFieldSample firstField(String firstField) {"
                + "\n    this.firstField = firstField;"
                + "\n    return this;"
                + "\n}";
            expect(new With('firstField', 'BuildSingleFieldSample', new Indenter('    ')).method()).toEqual(expected);
        });

        it('should be created for firstField and TypeName', () => {
            let expected =
                "@Override"
                + "\npublic TypeName firstField(String firstField) {"
                + "\n\tthis.firstField = firstField;"
                + "\n\treturn this;"
                + "\n}";
            expect(new With('firstField', 'TypeName').method()).toEqual(expected);
        });

        it('should be created for fieldName and TypeName', () => {
            let expected =
                "@Override"
                + "\npublic TypeName fieldName(String fieldName) {"
                + "\n\tthis.fieldName = fieldName;"
                + "\n\treturn this;"
                + "\n}";
            expect(new With('fieldName', 'TypeName').method()).toEqual(expected);
        });

    });

});