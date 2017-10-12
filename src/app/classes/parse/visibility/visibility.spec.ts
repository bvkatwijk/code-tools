import { Visibilities, PUBLIC, PRIVATE, PROTECTED, DEFAULT, Visibility } from 'app/classes/parse/visibility/visibility';

describe('Visibility Finder', () => {

    describe('fromString', () => {

        it('can determine public visibility', () => {
            expect(new Visibilities().fromString('public')).toBe(PUBLIC);
        });

        it('can determine private visibility', () => {
            expect(new Visibilities().fromString('private')).toBe(PRIVATE);
        });

        it('can determine protected visibility', () => {
            expect(new Visibilities().fromString('protected')).toBe(PROTECTED);
        });

        it('can determine default visibility', () => {
            expect(new Visibilities().fromString('')).toBe(DEFAULT);
        });

        it('throws on invalid visibility', () => {
            expect(() => { new Visibilities().fromString('something else'); }).toThrowError();
        });

    });

    describe('fromStrings', () => {

        it('can determine public from [public] visibilities', () => {
            expect(new Visibilities().fromStrings(['public'])).toBe(PUBLIC);
        });

        it('can determine public from [public, other] visibilities', () => {
            expect(new Visibilities().fromStrings(['public', 'other'])).toBe(PUBLIC);
        });

        it('can determine private from [private, other] visibilities', () => {
            expect(new Visibilities().fromStrings(['private', 'other'])).toBe(PRIVATE);
        });

        it('can determine private from [other, private] visibilities', () => {
            expect(new Visibilities().fromStrings(['other', 'private'])).toBe(PRIVATE);
        });

        it('throws when multiple results on same strings', () => {
            expect(() => { new Visibilities().fromStrings(['private', 'private']); }).toThrowError();
        });

        it('throws when multiple results on different strings', () => {
            expect(() => { new Visibilities().fromStrings(['private', 'public']); }).toThrowError();
        });

        it('throws when no results', () => {
            expect(() => { new Visibilities().fromStrings(['something else']); }).toThrowError();
        });

    });

});
