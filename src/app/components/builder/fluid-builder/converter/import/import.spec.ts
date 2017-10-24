import { Import } from './import';

describe('Import', () => {

    const A = JSON.parse(`[
        {
            "node": "ImportDeclaration",
            "name": {
                "identifier": "A",
                "node": "SimpleName"
            },
            "static": false,
            "onDemand": false
        }
    ]`);

    const aB = JSON.parse(`[
            {
                "node": "ImportDeclaration",
                "name": {
                    "node": "QualifiedName",
                    "qualifier": {
                        "identifier": "a",
                        "node": "SimpleName"
                    },
                    "name": {
                        "identifier": "B",
                        "node": "SimpleName"
                    }
                },
                "static": false,
                "onDemand": false
            }
        ]`);

    const abC = JSON.parse(`[
                {
                    "node": "ImportDeclaration",
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
                            "identifier": "C",
                            "node": "SimpleName"
                        }
                    },
                    "static": false,
                    "onDemand": false
                }
            ]`);

    it('should parse import A', () => {
        expect(new Import(A).getStatement()).toEqual('import A;');
    });

    it('should parse import a.B', () => {
        expect(new Import(aB).getStatement()).toEqual('import a.B;');
    });

    it('should parse import a.B', () => {
        expect(new Import(abC).getStatement()).toEqual('import a.b.C;');
    });

    describe('static', () => {

        const staticAb = JSON.parse(`[
            {
                "node": "ImportDeclaration",
                "name": {
                    "node": "QualifiedName",
                    "qualifier": {
                        "identifier": "A",
                        "node": "SimpleName"
                    },
                    "name": {
                        "identifier": "b",
                        "node": "SimpleName"
                    }
                },
                "static": true,
                "onDemand": false
            }
        ]`);

        it('should parse import static A.b;', () => {
            expect(new Import(staticAb).getStatement()).toEqual('import static A.b;');
        });

    });

    describe('multiple', () => {

        const aBAndcD = JSON.parse(`[
            {
                "node": "ImportDeclaration",
                "name": {
                    "node": "QualifiedName",
                    "qualifier": {
                        "identifier": "a",
                        "node": "SimpleName"
                    },
                    "name": {
                        "identifier": "B",
                        "node": "SimpleName"
                    }
                },
                "static": false,
                "onDemand": false
            },
            {
                "node": "ImportDeclaration",
                "name": {
                    "node": "QualifiedName",
                    "qualifier": {
                        "identifier": "c",
                        "node": "SimpleName"
                    },
                    "name": {
                        "identifier": "D",
                        "node": "SimpleName"
                    }
                },
                "static": false,
                "onDemand": false
            }
        ]`);

        it('should parse import a.B; import c.D', () => {
            expect(new Import(aBAndcD).getStatement()).toEqual('import a.B;\nimport c.D;');
        });

    });

    describe('wildcard', () => {

        const aWildcard = JSON.parse(`[
            {
                "node": "ImportDeclaration",
                "name": {
                    "identifier": "a",
                    "node": "SimpleName"
                },
                "static": false,
                "onDemand": true
            }
        ]`);

        it('should parse import a.B; import c.D', () => {
            expect(new Import(aWildcard).getStatement()).toEqual('import a.*;');
        });

    });

});
