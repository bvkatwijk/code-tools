import { With } from '../trait/with/fb-with';
import { Indenter } from '../../../../../classes/indent/indenter';
import { Build } from '../trait/build/fb-build';
import { Field } from '../../../../../classes/parse/field/field';
import { PRIVATE, PUBLIC } from '../../../../../classes/parse/visibility/visibility';
import { StringHelper } from '../../../../../classes/string/string-helper.spec';
import { FluidBuilderClass } from './fb-class';

describe(" ", () => {
    let indenter = new Indenter('    ');
    let builderClassTarget = `/** 2017-08-06 Generated Fluid Builder github.com/bvkatwijk/fluid-builder-generator */
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
        const field = new Field(PRIVATE, false, 'String', 'firstField');
        new StringHelper().assertEquals(
            new FluidBuilderClass(indenter).declarationAndBody(
                [field],
                [new With(field.name, 'BuildSingleFieldSample', indenter).method()],
                new Build('SingleFieldSample', indenter)),
            builderClassTarget);
    });

});