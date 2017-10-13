
export class Segments {

    /**
     * Convert json from javaparser to package path
     */
    jsonToString(segment: any): string {
        return [segment]
            .map(it => this.getFromIdentifier(it))
            .map(result => this.prependFromName(result, segment))
            .map(result => this.prependFromQualifier(result, segment))[0];
    }

    private getFromIdentifier(it: any): string {
        return it.identifier
            ? it.identifier
            : '';
    }

    private prependFromName(packageName: string, it: any): string {
        return it.name
            ? this.jsonToString(it.name) + packageName
            : packageName;
    }

    private prependFromQualifier(packageName, it: any): string {
        return it.qualifier
            ? this.jsonToString(it.qualifier) + '.' + packageName
            : packageName;
    }

}
