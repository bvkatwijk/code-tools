import { StringHelper } from '../../../../classes/string/string-helper.spec';
import { Whitespace } from '../../../../classes/whitespace/whitespace';
import { FluidBuilderConverter } from './fb-converter';


describe('Fluid Builder Converter', () => {

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

}
`;

        const target = `package com.some.other.pack;

import some.other.Import;

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

});
