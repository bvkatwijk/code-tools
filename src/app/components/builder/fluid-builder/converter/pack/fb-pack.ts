import { JavaClass } from '../../../../../classes/parse/parse';

export class Package {

    constructor(
        readonly packageJson: any
    ) {

    }

    getDeclaration(): string {
        return 'package ' + this.getSegments(this.packageJson.package.name) + ';';
    }

    getSegments(it: any) {
        if(it.identifier) {
            return it.identifier;
        } else {
            return it.qualifier.identifier + '.' + it.name.identifier;
        }
    }


}