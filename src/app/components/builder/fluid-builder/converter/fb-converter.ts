import { JavaParser } from "app/classes/parse/parse";
import { Build } from "app/components/builder/fluid-builder/converter/trait/build/fb-build";
import { Indenter } from "app/classes/indent/indenter";


export class FluidBuilderConverter {

    readonly indenter = new Indenter('    ');

    convert(value: string): string {
        let result = new JavaParser(value);
        const fields = result.getFields();
        const target = result.getName();
        const targetBuild = new Build(target, this.indenter);

        const buildTrait = this.indenter.indent(targetBuild.trait());
        // console.log('generated: ');
        // console.log(JSON.stringify(buildTrait));
        // console.log(buildTrait.replace(/\n/g,'\\n').replace(/\t/,'\\t'));

        return `package org.bvkatwijk.fbg.sample;

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

` + buildTrait + `

}
`;
    }

}