import { Build } from './fb-build';

describe("Build Method", () => {

    it('should be created for target named target and empty field', () => {
        let expectedTarget =
            "@Override"
            + "\npublic Target build() {"
            + "\n\treturn new Target();"
            + "\n}";
        expect(new Build('target').method('')).toEqual(expectedTarget);
    });

    it('should be created for target named target and empty field', () => {
        let expectedName =
            "@Override"
            + "\npublic Name build() {"
            + "\n\treturn new Name();"
            + "\n}";
        expect(new Build('name').method('')).toEqual(expectedName);
    });

    it('should be created for target named target and some field', () => {
        let expectedTarget =
            "@Override"
            + "\npublic Target build() {"
            + "\n\treturn new Target(some);"
            + "\n}";
        expect(new Build('target').method('some')).toEqual(expectedTarget);
    });

    it('should be created for target named target and some field', () => {
        let expectedName =
            "@Override"
            + "\npublic Name build() {"
            + "\n\treturn new Name(some);"
            + "\n}";
        expect(new Build('name').method('some')).toEqual(expectedName);
    });

});