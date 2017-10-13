import { JavaClass } from '../../../../../classes/parse/parse';

export class Package {

    constructor(
        readonly packageJson: any
    ) {

    }

    /**
     * return package declaration
     */
    getDeclaration(): string {
        return 'package ' + this.getPackageName(this.packageJson.name) + ';';
    }

    private getPackageName(it: any): string {
        return [it]
            .map(it => this.getFromIdentifier(it))
            .map(result => this.prependFromName(result, it))
            .map(result => this.prependFromQualifier(result, it))[0];
    }

    private prependFromQualifier(packageName, it: any): string {
        return it.qualifier
            ? this.getPackageName(it.qualifier) + '.' + packageName
            : packageName
    }

    private prependFromName(packageName: string, it: any): string {
        return it.name
            ? this.getPackageName(it.name) + packageName
            : packageName;
    }

    private getFromIdentifier(it: any): string {
        return it.identifier
            ? it.identifier
            : '';
    }

}