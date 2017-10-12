import { With } from './fb-with';

describe("With", () => {

    describe("trait", () => {

    });

    describe("method", () => {

        it('should be created for target named target', () => {
            let expected =
                "@Override"
                + "\npublic BuildSingleFieldSample firstField(String firstField) {"
                + "\n\tthis.firstField = firstField;"
                + "\n\treturn this;"
                + "\n}";
            expect(new With('firstField', 'BuildSingleFieldSample').method()).toEqual(expected);
        });

    });

});