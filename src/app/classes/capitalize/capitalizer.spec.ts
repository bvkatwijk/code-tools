import { capitalize } from './capitalizer';

describe('Capitalizer', () => {

    it('converts string to String', () => {
        expect(capitalize('string')).toEqual('String');
    });

    it('does not affect String', () => {
        expect(capitalize('String')).toEqual('String');
    });

    it('converts a string to A string', () => {
        expect(capitalize('a string')).toEqual('A string');
    });

    it('does not affect A string', () => {
        expect(capitalize('A string')).toEqual('A string');
    });

});
