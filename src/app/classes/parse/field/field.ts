import { Visibility } from '../visibility/visibility';

export class Field {

    constructor(
        readonly visibility: Visibility,
        readonly isFinal: boolean,
        readonly type: string,
        readonly name: string,
    ) { }

}
