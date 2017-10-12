import { JavaClass } from '../../../../../classes/parse/parse';

export class Package {

    constructor(
        readonly packageJson: any
    ) {

    }

    getDeclaration(): string {
        return 'package ' + this.getPackageName(this.packageJson.name) + ';';
    }

    getPackageName(it: any): string {
        let packageName = '';
        if (it.identifier) {
            packageName = it.identifier;
        }
        if (it.name) {
            packageName = this.getPackageName(it.name) + packageName;
        }
        if (it.qualifier) {
            packageName = this.getPackageName(it.qualifier) + '.' + packageName;
        }
        return packageName;
    }


}