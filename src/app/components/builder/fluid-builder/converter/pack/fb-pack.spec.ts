import { Package } from './fb-pack';

describe("Package", () => {

    const a = JSON.parse(`{
        "node": "PackageDeclaration",
        "name": {
            "identifier": "a",
            "node": "SimpleName"
        },
        "annotations": []
    }`);

    const b = JSON.parse(`{
        "node": "PackageDeclaration",
        "name": {
            "identifier": "b",
            "node": "SimpleName"
        },
        "annotations": []
    }`);

    const ab = JSON.parse(`{
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
    }`);

    const abc = JSON.parse(`{
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
    }`);

    const abcd = JSON.parse(`{
        "node": "PackageDeclaration",
        "name": {
            "node": "QualifiedName",
            "qualifier": {
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
            "name": {
                "identifier": "d",
                "node": "SimpleName"
            }
        },
        "annotations": []
    }`);

    it('should be parsed correctly for a', () => {
        expect(new Package(a).getDeclaration()).toEqual('package a;');
    });

    it('should be parsed correctly for b', () => {
        expect(new Package(b).getDeclaration()).toEqual('package b;');
    });

    it('should be parsed correctly for a.b', () => {
        expect(new Package(ab).getDeclaration()).toEqual('package a.b;');
    });

    it('should be parsed correctly for a.b.c', () => {
        expect(new Package(abc).getDeclaration()).toEqual('package a.b.c;');
    });

    it('should be parsed correctly for a.b.c.d', () => {
        expect(new Package(abcd).getDeclaration()).toEqual('package a.b.c.d;');
    });


});