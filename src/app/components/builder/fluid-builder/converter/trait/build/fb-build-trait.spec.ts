import { Build } from './fb-build';

describe('Build Trait', () => {

    it('should be created for target named target', () => {
        const expectedTarget =
        'public static interface BuildTarget {'
        + '\n\t' + 'public Target build();'
        + '\n}';
        expect(new Build('target').trait()).toEqual(expectedTarget);
    });

    it('should be created for target named target', () => {
        const expectedName =
        'public static interface BuildName {'
        + '\n\t' + 'public Name build();'
        + '\n}';
        expect(new Build('name').trait()).toEqual(expectedName);
    });

});
