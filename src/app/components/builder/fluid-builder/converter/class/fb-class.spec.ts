import { capitalize } from '../../../../../classes/capitalize/capitalizer';
import { With } from '../trait/with/fb-with';
import { Indenter } from '../../../../../classes/indent/indenter';
import { Build } from '../trait/build/fb-build';
import { Field } from '../../../../../classes/parse/field/field';
import { PRIVATE, PUBLIC } from '../../../../../classes/parse/visibility/visibility';
import { StringHelper } from '../../../../../classes/string/string-helper.spec';
import { FluidBuilderClass } from './fb-class';

describe('Fluid Builder Class', () => {

    let indenter = new Indenter('    ');
    let field = new Field(PRIVATE, false, 'String', 'firstField');

    describe('single field', () => {
        let target = `/** 2017-08-06 Generated Fluid Builder github.com/bvkatwijk/fluid-builder-generator */
public static class SingleFieldSampleBuilder implements WithFirstField, BuildSingleFieldSample {

    private String firstField;

    @Override
    public BuildSingleFieldSample firstField(String firstField) {
        this.firstField = firstField;
        return this;
    }

    @Override
    public SingleFieldSample build() {
        return new SingleFieldSample(firstField);
    }

}`

        it('should generate builder class correctly', () => {
            new StringHelper().assertEquals(
                new FluidBuilderClass(indenter).declarationAndBody(
                    [
                        field
                    ],
                    [
                        new With(field, 'BuildSingleFieldSample', indenter)
                    ],
                    new Build('SingleFieldSample', indenter)),
                target);
        });

    });

    describe('two private fields', () => {

        let secondField = new Field(PRIVATE, false, 'Integer', 'aNumber');
        let target = `/** 2017-08-06 Generated Fluid Builder github.com/bvkatwijk/fluid-builder-generator */
public static class SingleFieldSampleBuilder implements WithFirstField, WithANumber, BuildSingleFieldSample {

    private String firstField;
    private Integer aNumber;

    @Override
    public WithANumber firstField(String firstField) {
        this.firstField = firstField;
        return this;
    }

    @Override
    public BuildSingleFieldSample aNumber(Integer aNumber) {
        this.aNumber = aNumber;
        return this;
    }

    @Override
    public SingleFieldSample build() {
        return new SingleFieldSample(firstField, aNumber);
    }

}`

        it('should generate builder class correctly', () => {
            new StringHelper().assertEquals(
                new FluidBuilderClass(indenter).declarationAndBody(
                    [
                        field,
                        secondField],
                    [
                        new With(field, 'With' + capitalize(secondField.name), indenter),
                        new With(secondField, 'BuildSingleFieldSample', indenter)
                    ],
                    new Build('SingleFieldSample', indenter)),
                target);
        });

    });

});