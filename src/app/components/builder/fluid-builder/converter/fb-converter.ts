import { JavaParser } from "app/classes/parse/parse";


export class FluidBuilderConverter {

    readonly singleFieldClassTarget = `package org.bvkatwijk.fbg.sample;

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

    convert(value: string) {
        new JavaParser().parse(value);
        return this.singleFieldClassTarget;
    }

}