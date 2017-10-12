import { With } from './trait/with/fb-with';
import { JavaParser } from "app/classes/parse/parse";
import { Build } from "app/components/builder/fluid-builder/converter/trait/build/fb-build";
import { Indenter } from "app/classes/indent/indenter";


export class FluidBuilderConverter {

    readonly indenter = new Indenter('    ');

    convert(value: string): string {
        let result = new JavaParser(value);
        const fields = result.getFields();
        const target = result.getName();
        const traits: string[] = [];
        for(var i: number = 0; i < fields.length; i++) {
            if(fields[i+1]) {
                traits.push(new With(fields[i].name, fields[i+1].name, this.indenter).trait());
            } else {
                traits.push(new With(fields[i].name, 'Build' + target, this.indenter).trait());
            }
        }

        const targetBuild = new Build(target, this.indenter);
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

` + this.indenter.indent(this.indenter.indent(targetBuild.method('firstField'))) + `

    }

` + this.indenter.indent(traits[0]) + `

` + this.indenter.indent(targetBuild.trait()) + `

}
`;
    }

}