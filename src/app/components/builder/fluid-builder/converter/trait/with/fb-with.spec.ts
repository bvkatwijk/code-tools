import { Indenter } from '../../../../../../classes/indent/indenter';
import { With } from './fb-with';

describe('With', () => {

    describe('field=fieldName and target=TypeName', () => {

        const withIt = new With('fieldName', 'TypeName');

        it('should generate type equal to WithFieldName', () => {
            expect(withIt.getType()).toEqual('WithFieldName');
        });

        it('should generate correct trait', () => {
            expect(withIt.trait()).toEqual(
                'public static interface WithFieldName {'
                + '\n\tpublic TypeName fieldName(String fieldName);'
                + '\n}');
        });

        it('should generate correct method', () => {
            expect(withIt.method()).toEqual(
                '@Override'
                + '\npublic TypeName fieldName(String fieldName) {'
                + '\n\tthis.fieldName = fieldName;'
                + '\n\treturn this;'
                + '\n}');
        });

    });

    describe('field=firstField and target=BuildSingleFieldSample', () => {

        const withIt = new With('firstField', 'BuildSingleFieldSample');

        it('should generate type equal to WithFirstField', () => {
            expect(withIt.getType()).toEqual('WithFirstField');
        });

        it('should generate correct trait', () => {
            expect(withIt.trait()).toEqual(
                'public static interface WithFirstField {'
                + '\n\tpublic BuildSingleFieldSample firstField(String firstField);'
                + '\n}');
        });

        it('should generate correct method', () => {
            expect(withIt.method()).toEqual(
                '@Override'
                + '\npublic BuildSingleFieldSample firstField(String firstField) {'
                + '\n\tthis.firstField = firstField;'
                + '\n\treturn this;'
                + '\n}');
        });

    });

    describe('field=firstField and target=TypeName', () => {

        const withIt = new With('firstField', 'TypeName');

        it('should generate type equal to WithFirstField', () => {
            expect(withIt.getType()).toEqual('WithFirstField');
        });

        it('should generate correct trait', () => {
            expect(withIt.trait()).toEqual(
                'public static interface WithFirstField {'
                + '\n\tpublic TypeName firstField(String firstField);'
                + '\n}');
        });

        it('should generate correct method', () => {
            expect(withIt.method()).toEqual(
                '@Override'
                + '\npublic TypeName firstField(String firstField) {'
                + '\n\tthis.firstField = firstField;'
                + '\n\treturn this;'
                + '\n}');
        });

    });

    describe('using custom indenter', () => {

        const withIt = new With('firstField', 'BuildSingleFieldSample', new Indenter('    '));

        it('generates custom indented trait', () => {
            expect(withIt.trait()).toEqual(
                'public static interface WithFirstField {'
                + '\n    public BuildSingleFieldSample firstField(String firstField);'
                + '\n}');
        });

        it('generates custom indented method', () => {
            expect(withIt.method()).toEqual(
                '@Override'
                + '\npublic BuildSingleFieldSample firstField(String firstField) {'
                + '\n    this.firstField = firstField;'
                + '\n    return this;'
                + '\n}');
        });

    });

});
