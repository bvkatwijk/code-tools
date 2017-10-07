import { Build } from './fb-build';

describe("Build Trait", () => {

    it('should be created for target named target', () => {
        let expectedTarget =
        "public static interface BuildTarget {"
        + "\n\t" + "public Target build();"
        + "\n}";
        expect(new Build('target').trait()).toEqual(expectedTarget);
    });

    it('should be created for target named target', () => {
        let expectedName =
        "public static interface BuildName {"
        + "\n\t" + "public Name build();"
        + "\n}";
        expect(new Build('name').trait()).toEqual(expectedName);
    });

});