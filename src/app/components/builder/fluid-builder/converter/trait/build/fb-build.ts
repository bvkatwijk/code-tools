
export class Build {

    constructor(readonly target: string) {
        this.target = this.capitalize(target);
    }

    private capitalize(value: string) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    trait(): string {
        return "public static interface Build" + this.target + " {"
            + "\n\t" + "public " + this.target + " build();"
            + "\n}";
    }

    method(): string {
        return "@Override"
            + "\npublic " + this.target + " build() {"
            + "\n\treturn new " + this.target + "();"
            + "\n}";
    }
}