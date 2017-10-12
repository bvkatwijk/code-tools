import { With } from './fb-with';

describe("With", () => {

    describe("trait", () => {

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