import { StringHelper } from '../../../../classes/string/string-helper.spec';
import { Whitespace } from '../../../../classes/whitespace/whitespace';
import { FluidBuilderConverter } from './fb-converter';
import { Field } from '../../../../classes/parse/field/field';
import { Visibility, PUBLIC } from '../../../../classes/parse/visibility/visibility';


describe('Fluid Builder Converter', () => {

    describe('#withFirstField', () => {
        describe('on "name"', () => {
            const fieldName = 'name';
            it('returns "WithName"', () => {
                expect(new FluidBuilderConverter().withFirstField([new Field(
                    PUBLIC,
                    true,
                    'String',
                    fieldName)])).toBe('WithName');
            });
        });
        describe('on "other"', () => {
            const fieldName = 'other';
            it('returns "WithOther"', () => {
                expect(new FluidBuilderConverter().withFirstField([new Field(
                    PUBLIC,
                    true,
                    'String',
                    fieldName)])).toBe('WithOther');
            });
        });
    });

    describe('first example', () => {

        const source = `package org.bvkatwijk.fbg.sample;

import lombok.Value;

@Value
public class SingleFieldSample {

    private final String firstField;

}
`;

        const target = `package org.bvkatwijk.fbg.sample;

import lombok.Value;

@Value
public class SingleFieldSample {

    private final String firstField;

    public static WithFirstField builder() {
        return new SingleFieldSampleBuilder();
    }

    /** 2017-08-06 Generated Fluid Builder github.com/bvkatwijk/fluid-builder-generator */
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

    }

    public static interface WithFirstField {
        public BuildSingleFieldSample firstField(String firstField);
    }

    public static interface BuildSingleFieldSample {
        public SingleFieldSample build();
    }

}
`;

        it('should be converted to valid fluid builder implementation', () => {
            new StringHelper().assertEquals(
                new FluidBuilderConverter().convert(source),
                target);
        });

    });

    describe('second example', () => {

        const source = `package com.some.other.pack;

import some.other.Import;

@Value
public class SingleFieldSample {

    private final String firstField;
    private final Integer aNumber;

}
`;

        const target = `package com.some.other.pack;

import some.other.Import;

@Value
public class SingleFieldSample {

    private final String firstField;
    private final Integer aNumber;

    public static WithFirstField builder() {
        return new SingleFieldSampleBuilder();
    }

    /** 2017-08-06 Generated Fluid Builder github.com/bvkatwijk/fluid-builder-generator */
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

    }

    public static interface WithFirstField {
        public WithANumber firstField(String firstField);
    }

    public static interface WithANumber {
        public BuildSingleFieldSample aNumber(Integer aNumber);
    }

    public static interface BuildSingleFieldSample {
        public SingleFieldSample build();
    }

}
`;

        it('should be converted to valid fluid builder implementation', () => {
            new StringHelper().assertEquals(
                new FluidBuilderConverter().convert(source),
                target);
        });

    });

    describe('example without a package', () => {

        const source = `import some.other.Import;

@Value
public class SingleFieldSample {

    private final String firstField;
    private final Integer aNumber;

}
`;

        const target = `import some.other.Import;

@Value
public class SingleFieldSample {

    private final String firstField;
    private final Integer aNumber;

    public static WithFirstField builder() {
        return new SingleFieldSampleBuilder();
    }

    /** 2017-08-06 Generated Fluid Builder github.com/bvkatwijk/fluid-builder-generator */
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

    }

    public static interface WithFirstField {
        public WithANumber firstField(String firstField);
    }

    public static interface WithANumber {
        public BuildSingleFieldSample aNumber(Integer aNumber);
    }

    public static interface BuildSingleFieldSample {
        public SingleFieldSample build();
    }

}
`;

        it('should be converted to valid fluid builder implementation', () => {
            new StringHelper().assertEquals(
                new FluidBuilderConverter().convert(source),
                target);
        });

    });
});
