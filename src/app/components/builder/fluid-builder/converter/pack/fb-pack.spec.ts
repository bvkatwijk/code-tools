import { Package } from './fb-pack';

describe("Package", () => {

    const a = JSON.parse(`{
    "package": {
        "node": "PackageDeclaration",
        "name": {
            "identifier": "a",
            "node": "SimpleName"
        },
        "annotations": []
    }
}`);

    const b = JSON.parse(`{
    "package": {
        "node": "PackageDeclaration",
        "name": {
            "identifier": "b",
            "node": "SimpleName"
        },
        "annotations": []
    }
}`);

    const ab = JSON.parse(`{
    "package": {
        "node": "PackageDeclaration",
        "name": {
            "node": "QualifiedName",
            "qualifier": {
                "identifier": "a",
                "node": "SimpleName"
            },
            "name": {
                "identifier": "b",
                "node": "SimpleName"
            }
        },
        "annotations": []
    }
}`);

    const abc = JSON.parse(`{
    "package": {
        "node": "PackageDeclaration",
        "name": {
            "node": "QualifiedName",
            "qualifier": {
                "node": "QualifiedName",
                "qualifier": {
                    "identifier": "a",
                    "node": "SimpleName"
                },
                "name": {
                    "identifier": "b",
                    "node": "SimpleName"
                }
            },
            "name": {
                "identifier": "c",
                "node": "SimpleName"
            }
        },
        "annotations": []
    }
}`);

    it('should be parsed correctly for a', () => {
        expect(new Package(a).getDeclaration()).toEqual('package a;');
    });

    it('should be parsed correctly for b', () => {
        expect(new Package(b).getDeclaration()).toEqual('package b;');
    });

});