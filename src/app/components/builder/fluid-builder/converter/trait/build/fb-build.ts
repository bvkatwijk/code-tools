import { Indenter } from '../../../../../../classes/indent/indenter';

export class Build {

    constructor(
        readonly target: string,
        readonly indenter?: Indenter
    ) {
        this.target = this.capitalize(target);
        this.indenter = indenter || new Indenter();
    }

    private capitalize(value: string) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    trait(): string {
        return "public static interface Build" + this.target + " {"
            + "\n" + this.indenter.indent("public " + this.target + " build();")
            + "\n}";
    }

    method(firstField: string): string {
        return "@Override"
            + "\npublic " + this.target + " build() {"
            + "\n" + this.indenter.indent("return new " + this.target + "(" + firstField + ");")
            + "\n}";
    }

}