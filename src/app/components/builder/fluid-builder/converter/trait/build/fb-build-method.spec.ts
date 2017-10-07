import { Build } from './fb-build';

describe("Build Method", () => {

    it('should be created for target named target', () => {
        let expectedTarget =
        "@Override"
		+ "\npublic Target build() {"
		+ "\n\treturn new Target();"
		+ "\n}";
        expect(new Build('target').method()).toEqual(expectedTarget);
    });

    it('should be created for target named target', () => {
        let expectedName =
        "@Override"
		+ "\npublic Name build() {"
		+ "\n\treturn new Name();"
		+ "\n}";
        expect(new Build('name').method()).toEqual(expectedName);
    });

});