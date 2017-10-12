import { Field } from '../../../../classes/parse/field/field';
import { With } from './trait/with/fb-with';
import { JavaParser } from 'app/classes/parse/parse';
import { Build } from 'app/components/builder/fluid-builder/converter/trait/build/fb-build';
import { Indenter } from 'app/classes/indent/indenter';


export class FluidBuilderConverter {

    readonly indenter = new Indenter('    ');

    convert(value: string): string {
        const result = new JavaParser(value);
        const fields = result.getFields();
        const target = result.getName();

        const methods: string[] = [];
        const traits: string[] = [];
        for (let i = 0; i < fields.length; i++) {
            if (fields[i + 1]) {
                const nextWith = new With(fields[i].name, fields[i + 1].name, this.indenter);
                methods.push(nextWith.method());
                traits.push(nextWith.trait());
            } else {
                const nextWith = new With(fields[i].name, 'Build' + target, this.indenter);
                methods.push(nextWith.method());
                traits.push(nextWith.trait());
            }
        }

        const targetBuild = new Build(target, this.indenter);

        return [
            this.packageDeclaration(),
            this.importStatements(),
            this.sourceClassDeclaration(),
            this.sourceClassBody(fields, methods, targetBuild, traits),
            '}',
        ].join('\n\n') + '\n';
    }

    private builderClassDeclaration(): string {
        return '/** 2017-08-06 Generated Fluid Builder github.com/bvkatwijk/fluid-builder-generator */'
            + '\npublic static class SingleFieldSampleBuilder implements WithFirstField, BuildSingleFieldSample {';
    }

    private builderClassBody(fields: Field[], methods: string[], targetBuild: any): string {
        return this
            .indenter
            .indent([
            this.mutableFieldDeclarations(fields),
                methods.join('\n\n'),
                targetBuild.method('firstField')
            ].join('\n\n'));
    }

    private builderMethodDeclaration(): string {
        return 'public static WithFirstField builder() {'
            + '\n' + this.indenter.indent('return new SingleFieldSampleBuilder();')
            + '\n}';
    }

    private packageDeclaration(): string {
        return 'package org.bvkatwijk.fbg.sample;';
    }

    private importStatements(): string {
        return 'import lombok.Value;';
    }

    private sourceClassDeclaration(): string {
        return '@Value'
            + '\npublic class SingleFieldSample {';
    }

    private sourceClassBody(fields: Field[], methods: string[], targetBuild: any, traits: any[]): string {
        return this.indenter.indent([
            this.immutableFieldDeclarations(fields),
            this.builderMethodDeclaration(),
            this.builderClassDeclaration(),
            this.builderClassBody(fields, methods, targetBuild),
            '}',
            traits.join('\n\n'),
            targetBuild.trait()
        ].join('\n\n'));
    }

    private immutableFieldDeclarations(fields: Field[]): string {
        return fields
            .map(it => it.immutableDeclaration())
            .join('\n');
    }

    private mutableFieldDeclarations(fields: Field[]): string {
        return fields
            .map(it => it.mutableDeclaration())
            .join('\n');
    }

}
