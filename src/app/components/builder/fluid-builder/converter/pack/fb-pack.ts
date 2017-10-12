import { JavaClass } from '../../../../../classes/parse/parse';

export class Package {

    constructor(
        readonly packageJson: any
    ) {

    }

    getDeclaration(): string {
        console.log(this.packageJson);
        return 'package ' + this.packageJson.package.name.identifier + ';';
    }

    getSegments(declaration: any) {
        console.log('Retrieving segment of ', declaration);
        // if(declaration.name)
    }


}